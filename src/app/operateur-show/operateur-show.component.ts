import { ApiService } from './../api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operateur-show',
  templateUrl: './operateur-show.component.html',
  styleUrls: ['./operateur-show.component.css']
})
export class OperateurShowComponent implements OnInit {

  constructor(private apiService:ApiService, private route:ActivatedRoute) { }

  operateur
  op

  ngOnInit() {
    this.route.params.subscribe( params =>{
      this.operateur = params.operateur;
    });
    this.apiService.get('operateurs/'+this.operateur).subscribe(data=>{
      this.op = data
    });
  }

}
