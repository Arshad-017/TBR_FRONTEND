import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DeleteEmployeeService {
  

  domian:string = environment.coreServiceUrl;
  constructor(private http : HttpClient) { }


  deleteEmployee(jsonUpdadte:any):Observable<any>{
     return this.http.post(`${this.domian}/delete` , jsonUpdadte);
  }
}
