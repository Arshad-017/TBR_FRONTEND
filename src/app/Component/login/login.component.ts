import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  Authen!:boolean ;
  hittedReqForLogin!:boolean;
  @Output() userLoggedIn = new EventEmitter<boolean>();
  constructor(private fb : FormBuilder ,
    private router : Router,
    private userLogin :LoginService){
    
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
         
      emailId : ['' , Validators.required] ,
      password : ['' , Validators.required]
 
     })
  }

  sendDataToParent(value:boolean){
    this.userLoggedIn.emit(value)
  }
  AuthenticateUser(){
    
    
    this.userLogin.loginUser(this.loginForm.get('emailId')?.value,this.loginForm.get('password')?.value).
    subscribe(
      data => {
        if(data.success == 'true'){
          this.Authen=true;
          //this.sendDataToParent(this.Authen);
          this.hittedReqForLogin=true;
          if(sessionStorage.getItem('token')=="" || sessionStorage.getItem('token')==null){
              sessionStorage.clear();
              sessionStorage.setItem('token' , 'true');
              //console.log(data.data[0].fullName)
              sessionStorage.setItem("username" ,data.data[0].fullName);
              sessionStorage.setItem("userLoginDetails" , JSON.stringify(data.data[0]));
          }
          this.router.navigate(['/home']);
        }
        else{
          this.hittedReqForLogin=true;
          this.Authen=false;
        }
      }
    );
    
  }


  redirectTosignUp(){
    
    this.router.navigate(['/signup']);
  }

}
