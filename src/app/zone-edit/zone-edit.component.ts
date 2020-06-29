import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone-edit',
  templateUrl: './zone-edit.component.html',
  styleUrls: ['./zone-edit.component.css']
})
export class ZoneEditComponent implements OnInit {

  key:any
  zone:any
  zoneForm:FormGroup;
  devises:any;

  constructor(private fb: FormBuilder, private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.zoneForm = this.fb.group({
      indicatif: ['', Validators.required],
      pays: ['', Validators.required],
      devise: ['', Validators.required],
    });

    this.route.params.subscribe( params =>{
      this.key = params.key;
    });

    this.apiService.get('devises').subscribe(data=>{
      this.devises = data;
    });

    this.apiService.get('zones/' + this.key).subscribe(data=>{
      this.zone =  data;
    })
  }

  onClickSubmit(data,key) {

    this.apiService.put(key,'zones',data).subscribe(res=>{
      console.log(res)
    })
 }

}
