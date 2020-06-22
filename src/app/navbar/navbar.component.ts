import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  logout(){
    let body = {'telephone':'','password':''}
     this.apiService.post(body,'auth/logout').subscribe((data) => this.displayData(data));
  }

  displayData(data){
    console.log(data);
  }
}
