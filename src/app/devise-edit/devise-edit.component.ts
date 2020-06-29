import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './../api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devise-edit',
  templateUrl: './devise-edit.component.html',
  styleUrls: ['./devise-edit.component.css']
})
export class DeviseEditComponent implements OnInit {

  deviseForm: FormGroup;

  devise:any;
  devise_code:any

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {

    this.deviseForm = this.fb.group({
      code: [this.devise.code, Validators.required],
      display_name: [this.devise.display_name, Validators.required],
    });

    this.route.params.subscribe( params =>{
      this.devise_code = params.code;
    });

    this.apiService.get('devises/' + this.devise_code).subscribe((data)=>{
       this.devise = data
    });
  }

  deviseSave(){
    let body = this.deviseForm.value;
    this.apiService.post(body,'devises').subscribe((data)=>{
      this.router.navigate(['/devises'])
    })
  }

}
