import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AddDataService {

  constructor(private http : HttpClient) { }
  //url:string = "http://localhost:3000/add/addEmployee";
  domain:string = environment.coreServiceUrl;
  addDataToDB(data:any):Observable<any>{
   return this.http.post(`${this.domain}/add/addEmployee` , data)
  }
}
