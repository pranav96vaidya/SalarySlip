import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { AppState, selectAuthenticationState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
// import { Logout } from 'src/app/store/actions/authentication.actions';
// import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  getState: Observable<any>;
  isAuthenticated: boolean;
  userName: string;
  userImg: string;
  // constructor(private store: Store<AppState>, private userService: UserService) {
  //   this.getState = this.store.select(selectAuthenticationState);
  // }

  constructor(private auth: AuthenticationService, private route: Router) {}

  ngOnInit() {
    if(this.auth.isLoggedIn()) {
      this.isAuthenticated = true;
    }
    this.userName = JSON.parse(localStorage.getItem('userName'));
    this.userImg = JSON.parse(localStorage.getItem('userImg'));
    // this.getState.subscribe((state) => {
    //   console.log(state);
    //   this.isAuthenticated = state.isAuthenticated;
    // });
    // if(this.isAuthenticated) {
    //   this.userService.getDetails().subscribe(response => {
    //     console.log(response);
    //     this.userName = response['data'].fullName;
    //     this.userImg = response['data'].profileImgSmall;
    //   }, error =>  { 
    //       console.log(error);
    //   })
    // }
    
  }

  loadHomePage() {
    this.route.navigate(['./home']);
  }

  logout(): void {
    // this.store.dispatch(new Logout);
    console.log("logout");
  }

}
