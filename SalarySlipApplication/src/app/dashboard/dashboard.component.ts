import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getDetails().subscribe(response => {
      console.log(response);
      this.username = response['data'].fullName;
      console.log(this.username);
    }, error => console.log(error))
  }

}

