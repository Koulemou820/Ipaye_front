import { Devise } from './../models/Devise';
import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devises',
  templateUrl: './devises.component.html',
  styleUrls: ['./devises.component.css']
})
export class DevisesComponent implements OnInit {

  devises:Devise[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {

     this.apiService.get('devises').subscribe((data) => {

       this.devises =  data['data'];
        console.log(data);
     });

  }

  destroyDevise(code){
    console.log(code)
    this.apiService.delete(code,'devises').subscribe((data)=>{
       this.router.navigate(['/devises'])
    })
  }



}
