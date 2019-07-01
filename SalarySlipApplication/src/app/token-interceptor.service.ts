import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(public auth: AuthService, private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    let authReq = req;
    if (this.auth.getToken() != null) {
      authReq = req.clone({ headers: req.headers.set('token', this.auth.getToken()) });
    }
    return next.handle(authReq).pipe(tap(
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          console.log(err);
          console.log('req url :: ' + req.url);
          if (err.status === 401) {
            this.router.navigate(['']);
          }
        }
      }
    ));

    // if (request['url'] == "http://34.211.76.6:9095/rest/auth/login") {
    //   console.log("login request");
    //   request = request.clone({
    //     setHeaders: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json"
    //     }
    //   });
    // } else {
    //   console.log(request.url);
    //   console.log(typeof this.auth.getToken());
      
    //   request = request.clone({
    //     setHeaders: {
    //       "token": this.auth.getToken(),
    //       // "Content-Type": "application/json",
    //       "Accept": "application/json"
    //     }
    //   });
    // }
    
    // return next.handle(request);
  }
}
