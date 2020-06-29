import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operateur-edit',
  templateUrl: './operateur-edit.component.html',
  styleUrls: ['./operateur-edit.component.css']
})
export class OperateurEditComponent implements OnInit {


  operateur
  op

  constructor(private apiService:ApiService, private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe( params =>{
      this.operateur = params.operateur;
    });
    this.apiService.get('operateurs/'+this.operateur).subscribe(data=>{
      this.op = data
    });
  }

  onClickSubmit(data,key){

    this.apiService.put(key,'operateurs',data).subscribe(res=>{
      console.log(res)
    })

  }
}
