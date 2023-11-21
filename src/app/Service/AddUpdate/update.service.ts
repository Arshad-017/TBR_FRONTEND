import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http :HttpClient) { }

  //url:string="http://localhost:3000/updateRecords";
  domain:string = environment.coreServiceUrl;
  udpateData(updateFrom:any):Observable<any>{
    return this.http.post(`${this.domain}/updateRecords` , updateFrom);
  }
}
