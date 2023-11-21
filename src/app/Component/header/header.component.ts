import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  userLoginData!:any;
  MALE:string="male";
  FEMALE:string="female"
  checkGender!:string;
  PageTitle:string = "AM_SOFT";
  userLoginName!:string;
  constructor(private router : Router){

  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }


  
  ngOnInit() {
    this.userLoginData = 
     sessionStorage.getItem("userLoginDetails");
     this.userLoginData = JSON.parse(this.userLoginData);
     this.checkGender = this.userLoginData.gender;
     this.userLoginName = this.userLoginData.fullName;
  }
}
