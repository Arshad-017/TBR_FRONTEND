import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private http :HttpClient) { }
  //url:string = "http://localhost:3000/view";
  domain:string = environment.coreServiceUrl;
  getDataForViewComponent():Observable<any>{
    
    return this.http.get(`${this.domain}/view`);
  }
}
