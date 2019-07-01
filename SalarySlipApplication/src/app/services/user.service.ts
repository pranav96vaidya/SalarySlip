import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiVUhSNU5VRFVZIiwic3RhdHVzIjoiZW1wbG95ZWUiLCJpYXQiOjE1NjEzNjY0NTMsImV4cCI6MTU2MTM3MDA1M30.lTWt3MMo9VuOcmy9E6ouo1EmLuSBwERNiCjSbTlQ6iQ';
  
  constructor(private http: HttpClient) { }

  getDetails() {
    return this.http.get('http://34.211.76.6:9095/rest/employee/detail');
  }
}
