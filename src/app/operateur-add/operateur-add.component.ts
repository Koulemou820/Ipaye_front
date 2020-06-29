import { ApiService } from './../api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operateur-add',
  templateUrl: './operateur-add.component.html',
  styleUrls: ['./operateur-add.component.css']
})
export class OperateurAddComponent implements OnInit {

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  operateurForm: FormGroup;

  ngOnInit() {

    this.operateurForm = this.fb.group({
      operateur: ['', Validators.required],
    });

  }

  operateurSave(){
    let body = this.operateurForm.value
    this.apiService.post(body,'operateurs').subscribe(data => {
       console.log(data);
    });
  }

}
