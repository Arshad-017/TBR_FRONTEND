import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  domain:string = environment.coreServiceUrl;
  constructor(private http :HttpClient) { }
  registerData(regFormJSON:any):Observable<any>{
    return this.http.post(`${this.domain}/registerUser` , regFormJSON)
  }
}
