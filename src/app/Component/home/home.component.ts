import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  namepresent:boolean = false;
  userloggedInName!:any;
  grettingMessgae:string="";
  constructor(private router : Router) {
    
  }
  onload(){

  }
  ngOnInit(){
    this.userloggedInName = sessionStorage.getItem("username");
    let d = new Date();
    let time = d.getHours();
    if (time >= 0 && time < 12) {
     this.grettingMessgae= "Good morning";
    }
    else if (time >= 12 && time <= 16) {
      this.grettingMessgae="Good afternoon";
    }
    else{
      this.grettingMessgae="Good evening";
    }
    if(this.userloggedInName!=null)
      this.namepresent=true;
    else 
      this.namepresent=false;
    
  }


  goToDataManager(){
    this.router.navigateByUrl("/addUpadte");
  }
}
