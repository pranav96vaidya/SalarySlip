import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm : NgForm;
  email: string;
  password: string;
  data: {email: string, password: string};
  payload: string;
  constructor(private route: Router, private login: LoginService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.email = this.loginForm.value.email;
    this.password = this.loginForm.value.password;
    this.data = {email: this.email, password: this.password};
    this.login.validateLogin(this.data).subscribe(response => 
    {
      localStorage.setItem('token', JSON.stringify(response['data']));
      this.route.navigate(['./dashboard']);
      console.log(response['data']);
    }), console.error();
  }
}
