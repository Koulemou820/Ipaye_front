import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  token:string =  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9uczMwNDcxNDcuaXAtNS0xMzUtMTY1LmV1OjgwMDBcL2FwaVwvdjFcL2FkbWluXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU5MjkxMTM3NSwiZXhwIjoxNTkyOTE0OTc1LCJuYmYiOjE1OTI5MTEzNzUsImp0aSI6IjRUbDBTaVh0aVJRS3Bja0giLCJzdWIiOjEsInBydiI6IjRhNmVkMDg1YzhiYTQ5MTg3ODg4YjI5MmQ2NjBlNTIzNzRlZDRkZDEifQ.vVx2Kum5zAOwe4js1HocHpqhPcfpNm1WcC5MT1MU2bU"
  headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);


  baseUrl = 'http://ns3047147.ip-5-135-165.eu:8000/api/v1/admin/';

  constructor(private _httpClient: HttpClient) { }

  post(body, uri){
    return this._httpClient.post(this.baseUrl+'' + uri,body, {headers: this.headers})
  }

  get(uri){
    return this._httpClient.get(this.baseUrl+''+ uri,{headers:this.headers});
  }

  delete(code, uri){
     return this._httpClient.delete(this.baseUrl+''+ uri + '/' + code , {headers:this.headers})
  }

  put(code, uri, body){
     return this._httpClient.put(this.baseUrl+''+ uri + '/' + code , body,  {headers:this.headers})
  }

}
