import { Component, OnInit } from '@angular/core';
import { RegresService } from '../shared/regres.service';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = [];

  constructor(private regres: RegresService) { }

  isAvailable = false;

  ngOnInit() {
    this.regres.getAllUsers()
    .subscribe( data => {
      this.users = data;
      console.log(this.users);
    });

  }
  showUsers() {
    this.isAvailable = true;
  }
  hideUsers() {
    this.isAvailable = false;
  }


}
