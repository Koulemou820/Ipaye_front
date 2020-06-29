import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devise-add',
  templateUrl: './devise-add.component.html',
  styleUrls: ['./devise-add.component.css']
})
export class DeviseAddComponent implements OnInit {

  deviseForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.deviseForm = this.fb.group({
      code: ['', Validators.required],
      display_name: ['', Validators.required],
    });

  }

  deviseSave(){
    let body = this.deviseForm.value;
    this.apiService.post(body,'devises').subscribe((data)=>{
      this.router.navigate(['/devises'])
    })
  }

}
