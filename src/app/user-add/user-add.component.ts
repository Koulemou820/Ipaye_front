import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
        fullname: ['', Validators.required],
        email: ['', Validators.required],
        telephone: ['',  Validators.required],
        password:['',  Validators.required],
        genre: ['', Validators.required]
    });
  }

  register(){
    console.log("Donnees du formulaire...",this.registerForm.value );
  }

}
