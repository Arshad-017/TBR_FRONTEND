import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {
  domain!:string;
  constructor(private http :HttpClient) { }
   
  contactUs(json:any):Observable<any>{
    this.domain= environment.coreServiceUrl;
    return this.http.post(`${this.domain}/contactUs` , json)
  } 

  notifyus(json:any):Observable<any>{
    this.domain= environment.coreServiceUrl;
    return this.http.post(`${this.domain}/notify` , json)
  }
}
