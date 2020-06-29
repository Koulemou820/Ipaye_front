import { ApiService } from './../api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone-add',
  templateUrl: './zone-add.component.html',
  styleUrls: ['./zone-add.component.css']
})
export class ZoneAddComponent implements OnInit {


  key:any
  zone:any
  zoneForm:FormGroup
  devises:any;

  constructor(private fb: FormBuilder, private apiService:ApiService) { }

  ngOnInit() {
    this.zoneForm = this.fb.group({
      indicatif: ['', Validators.required],
      pays: ['', Validators.required],
      deviseId: ['', Validators.required],
    });

    this.apiService.get('devises').subscribe(data=>{
      this.devises = data;
    });
  }

  zoneSave(){
    let body = this.zoneForm.value
    this.apiService.post(body,'zones').subscribe(data=>{
       console.log(data);
    })
  }

  changeDevise(event){
  }

}
