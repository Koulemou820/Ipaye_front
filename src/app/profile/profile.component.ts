import { getCookie } from './../cookies';
import { ApiService } from './../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  user:any;

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.user = JSON.parse(getCookie('user'));
    this.profileForm = this.fb.group({
      nom: [this.user.nom, Validators.required],
      identifiant: [this.user.identifiant, Validators.required],
      pays: [this.user.pays, Validators.required],
      devise: [this.user.devise, Validators.required],

    });

    this.showProfile()
  }

  register(){
    console.log(this.profileForm.value);

  }

  showProfile(){
     this.apiService.get('auth/profil').subscribe((data) => this.displayData(data));
  }

  logOut(){
    let body = {'telephone':'','password':''}
    this.apiService.post(body,'auth/logout').subscribe((data) => this.displayData(data));
  }

  editPassword(){
    let body = {'telephone':'','password':''}
    this.apiService.post(body,'auth/update-password').subscribe((data) => this.displayData(data));
  }

  displayData(data){
    console.log(data);
  }
}
