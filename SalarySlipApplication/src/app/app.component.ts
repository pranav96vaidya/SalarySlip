import { Component, OnInit } from '@angular/core';
import { UserDetailService } from './services/user-detail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SalaryApplication';
  userName: string;
  userImg: string;
  fetchDone: boolean;
  constructor(private userService: UserDetailService) { }
  ngOnInit() {
    this.userService.getDetail().subscribe(responseList => {
      console.log(responseList);
      localStorage.setItem('userName', JSON.stringify(responseList['data'].fullName));
      localStorage.setItem('userImg', JSON.stringify(responseList['data'].profileImgSmall));
      localStorage.setItem("empId", JSON.stringify(responseList['data'].id));
      this.fetchDone = true;
    }, error =>  { 
        console.log(error);
        this.fetchDone = true;
    })
  }
}
