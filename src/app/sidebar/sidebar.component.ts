import { getCookie } from './../cookies';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user:any

  constructor() { }

  ngOnInit() {

    this.user = getCookie('user');
  }

}
