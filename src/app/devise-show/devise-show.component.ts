import { FormGroup } from '@angular/forms';
import { Devise } from './../models/Devise';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devise-show',
  templateUrl: './devise-show.component.html',
  styleUrls: ['./devise-show.component.css']
})
export class DeviseShowComponent implements OnInit {

  devise_code:any;
  devise: Devise;
  zoneForm: FormGroup;

  constructor(private apiService:ApiService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params =>{
      this.devise_code = params.code;
    });
    this.apiService.get('devises/'+ this.devise_code).subscribe(data=>{
      console.log(data);
      this.devise = data['data'];

    })
  }

}
