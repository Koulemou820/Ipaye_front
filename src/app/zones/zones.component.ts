import { Zone } from './../models/Zone';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {

  zones:any;
  constructor(private apiService:ApiService) { }

  ngOnInit() {
      this.apiService.get('zones').subscribe( data =>{
        this.zones = data;
        console.log(this.zones);
      })
  }

  destroy(key){
     this.apiService.delete(key,'devises').subscribe(data=>{
        console.log(data);
     })
  }

}
