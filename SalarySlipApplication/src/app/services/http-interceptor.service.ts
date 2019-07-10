import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(public auth: AuthenticationService, private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    let authReq = req;
    let token = this.auth.getToken();
    console.log(token);
    // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiVTBERFlVTlNEIiwic3RhdHVzIjoiYWRtaW4iLCJpYXQiOjE1NjI1NTc0NjAsImV4cCI6MTU2MjU2MTA2MH0.GV8AouvzUolUgXp_Bbk-9gSD6Z4SprNzGJ2PIQc5-1A";
    if (token) {
      authReq = req.clone({ headers: req.headers.set('token', token)});
    }

    return next.handle(authReq).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        console.log(event);
      }
    }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          console.log(err);
          // if (err.status === 402) {
            this.auth.token = null;
            console.log(this.auth.token);
            this.router.navigate(['']);
          // }
        }
      }
    ));
    // return next.handle(authReq).pipe(tap(
    //   event => {
    //     console.log(event);
    //   },
    //   (err: any) => {
    //     console.log("error" + err);
    //     if (err instanceof HttpErrorResponse) {
    //       console.log(err);
    //       console.log('req url :: ' + req.url);
    //       if (err.status === 402) {
    //         this.auth.cookie = null;
    //         console.log(this.auth.cookie);
    //         this.router.navigate(['']);
    //       }
    //     }
    //   }
    // ));
  }
}