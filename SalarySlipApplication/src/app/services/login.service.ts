import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private readonly http: HttpClient) {
  }

  validateLogin(data) {
    return this.http.post("http://34.211.76.6:9095/rest/auth/login", data);
  }
}
