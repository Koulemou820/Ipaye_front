import { Router } from '@angular/router';
import { getCookie, deleteCookie } from './../cookies';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   user:any

  constructor(private apiService: ApiService, private router:Router) { }

  ngOnInit() {

    this.user = JSON.parse(getCookie('user'));

  }

  logout(){
    let body = {'telephone':'','password':''}
    this.apiService.post(body,'auth/logout').subscribe((data) => this.displayData(data));
    deleteCookie('user');
    deleteCookie('token');
    this.router.navigate(['/'])
  }

  displayData(data){
    console.log(data);
  }
}
