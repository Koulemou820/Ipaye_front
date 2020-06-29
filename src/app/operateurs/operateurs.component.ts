import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operateurs',
  templateUrl: './operateurs.component.html',
  styleUrls: ['./operateurs.component.css']
})
export class OperateursComponent implements OnInit {

  operateurs:any;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.get('operateurs').subscribe(data=>{
      this.operateurs = data;
    });
  }

  destroyOperateur(operateur){
      this.apiService.delete(operateur,'operateurs').subscribe(data =>{
         console.log(data);
      })
  }

}
