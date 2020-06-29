import { ApiService } from './../api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taux-echange-add',
  templateUrl: './taux-echange-add.component.html',
  styleUrls: ['./taux-echange-add.component.css']
})
export class TauxEchangeAddComponent implements OnInit {

  constructor(private fb: FormBuilder, private apiService:ApiService) { }

  tauxEchangeForm:FormGroup
  devisesA:any;
  devisesB:any;

  ngOnInit() {
    this.tauxEchangeForm = this.fb.group({
      idDeviseA: ['', Validators.required],
      idDeviseB: ['', Validators.required],
      taux: ['', Validators.required],
      pourcentage: ['', Validators.required],
    });

    this.apiService.get('devises').subscribe(data=>{
      this.devisesA = data;
      this.devisesB = data;
    });
  }

  tauxEchangeSave(){
    let body = this.tauxEchangeForm.value
    this.apiService.post(body,'taux-echanges').subscribe(data=>{
       console.log(data);
    })
  }
}
