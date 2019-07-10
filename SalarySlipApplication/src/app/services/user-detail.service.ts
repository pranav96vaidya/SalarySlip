import { Injectable } from '@angular/core';
import { Observable, forkJoin } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserDetailService {

  constructor(private http: HttpClient) { }

  getDetail(): Observable<any> {
    return this.http.get("http://34.211.76.6:9095/rest/employee/detail");
  }

  getEmployeeList(): Observable<any> {
    return this.http.get("http://34.211.76.6:9095/rest/admin/employee"); 
  }
}