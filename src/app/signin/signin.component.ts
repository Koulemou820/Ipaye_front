import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signForm: FormGroup;
  httpData
  constructor(private fb: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.signForm = this.fb.group({
      telephone: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
      let body = this.signForm.value;
     this.apiService.post(body,'auth/login').subscribe((data) => this.displayData(data));
     console.log("Donnees du formulaire...", this.signForm.value);
     this.router.navigate(['/dashboard'])
  }

   displayData(data){
      console.log(data);
   }


}
