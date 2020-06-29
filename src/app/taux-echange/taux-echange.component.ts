import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taux-echange',
  templateUrl: './taux-echange.component.html',
  styleUrls: ['./taux-echange.component.css']
})
export class TauxEchangeComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  taux_echanges

  ngOnInit() {

    this.apiService.get('taux-echanges').subscribe(data=>{
      this.taux_echanges = data;
    });

  }

}
