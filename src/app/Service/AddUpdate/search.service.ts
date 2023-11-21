import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OnSameUrlNavigation } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http : HttpClient) { }
  //searchGenUrl:string = "http://localhost:3000/searchEmployee";
  //searchSpecificurl:string = "http://localhost:3000/searchSpecificurl";
  domain:string = environment.coreServiceUrl;
  getDataOfTbrEmployee(data:any):Observable<any>{
   // alert("before Calling BackEnd")
   return this.http.post(`${this.domain}/searchEmployee`, data);
  }

  getDataofTbrEmployeeOfSpecificEmployee(emp_id:string):Observable<any>{
     return this.http.get(`${this.domain}/searchSpecificurl/${emp_id}`);
   }
}
