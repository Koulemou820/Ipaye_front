import { ApiService } from './../api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
  }

  register(){

  }

  showProfile(){
     this.apiService.get('auth/profil').subscribe((data) => this.displayData(data));
  }

  logOut(){
    let body = {'telephone':'','password':''}
    this.apiService.post(body,'auth/logout').subscribe((data) => this.displayData(data));
  }

  displayData(data){
    console.log(data);
  }
}
