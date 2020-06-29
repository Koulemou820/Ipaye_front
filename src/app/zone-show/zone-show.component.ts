import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone-show',
  templateUrl: './zone-show.component.html',
  styleUrls: ['./zone-show.component.css']
})
export class ZoneShowComponent implements OnInit {

  constructor(private apiService:ApiService, private route:ActivatedRoute) { }

  key
  zone


  ngOnInit() {
    this.route.params.subscribe( params =>{
      this.key = params.key;
    });
    this.apiService.get('zones/'+this.key).subscribe(data=>{
      this.zone = data
    });
  }
}
