import { getCookie } from './../cookies';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:any;

  constructor() { }

  ngOnInit() {
     this.user = getCookie('user');

     console.log(this.user);
  }

}
