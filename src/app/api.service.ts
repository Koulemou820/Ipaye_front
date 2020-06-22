import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
  baseUrl = 'http://ns3047147.ip-5-135-165.eu:8000/api/v1/admin/';

  constructor(private _httpClient: HttpClient) { }

  post(body, uri){
    return this._httpClient.post(this.baseUrl+'/' + uri,body, {headers: this.headers})
  }

  get(uri){
    return this._httpClient.get(this.baseUrl+'/'+ uri,{headers:this.headers});
  }

}
