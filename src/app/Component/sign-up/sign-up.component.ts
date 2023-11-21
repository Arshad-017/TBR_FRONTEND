import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUserService } from 'src/app/Service/register-user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

   registerForm!:FormGroup;
   passwordMismatch:boolean=false;
   phoneNumberCount:boolean=false;
   respData!:string;

  constructor(private fb : FormBuilder,private regService : RegisterUserService,
    private router :Router){
    this.registerForm = this.fb.group({
      fullName : ['' , Validators.required],
      userName : ['' , Validators.required],
      emailId : ['' , Validators.required],
      phoneNumber : ['' , Validators.required],
      password :['' , Validators.required],
      confirmPassword : ['' , Validators.required],
      gender : ['male' , Validators.required],
    })
  }


  Register(){
    
    if(this.AuthencateValidation()){
      this.regService.registerData(this.registerForm.value).subscribe(data=>{
        this.respData = data.message;
        this.router.navigate(['login']);
      })
    }
}


  AuthencateValidation():boolean {
    
    if(this.registerForm.get('password')?.value != this.registerForm.get('confirmPassword')?.value 
    && this.registerForm.get('password')?.value!="")
    {
      this.passwordMismatch=true;
      return false;
    }
    else if(this.registerForm.get('phoneNumber')?.value.length != 10){
       this.phoneNumberCount=true;
       return false;
    }

    return true;
  }

  backToLoginPage(){
    this.router.navigate(['login']);
  }

}
