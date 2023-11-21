import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }
  domain:string = environment.coreServiceUrl;
  loginUser(username:string,password:string):Observable<any>{
     return this.http.get(`${this.domain}/login?user=${username}&pass=${password}`);
  }
}
