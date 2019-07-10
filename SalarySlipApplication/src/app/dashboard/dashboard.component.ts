import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserDetailService } from '../services/user-detail.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


// import { User } from './../../models/user';
// import { AppState, selectAuthenticationState } from './../../store/app.state';
// import { Logout } from './../../store/actions/authentication.actions';
// import { UserService } from 'src/app/services/user.service';
// import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  empName: string;
  getState: Observable<any>;
  isAuthenticated: boolean = false;
  fetchDone = false;
  users: string;
  employeeList: string;
  month = new Date().getMonth();
  months: string[] = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"];
  currentMonth = this.months[this.month];
  years: number[] = [2017, 2018, 2019];
  currentYear = new Date().getFullYear();
  constructor(private userService: UserDetailService, private route: Router, private title: Title) {
    // this.getState = this.store.select(selectAuthenticationState);
  }

  ngOnInit() {
    this.title.setTitle('Home Page');
    this.userService.getEmployeeList().subscribe(responseList => {
      console.log(responseList);
      this.users = responseList['data'];
      // this.empName = this.responseData2['data'];
      // console.log(response['data']);
      this.fetchDone = true;
    }, error =>  { 
        console.log(error);
        this.fetchDone = true;
    })
    // this.employeeList = JSON.parse(localStorage.getItem("employee"));
    // this.users = this.employeeList['data'];
  }

  fetchSalarySlip(emp) {
    console.log(emp);
    localStorage.getItem("empId");
    // this.route.navigate(['/slip', 'employee', {empId: emp.id} , 'salary-slip' , {sId: emp.id}]);
    this.route.navigate(['/slip', emp.id,emp.id]);
  }

  uploadCsv() {
    console.log("csv");
    this.route.navigate(['/uploadfile']);
  }

}