
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testheader',
  templateUrl: './testheader.component.html',
  styleUrls: ['./testheader.component.css']
})
export class TestheaderComponent {
  
  constructor(private router : Router){

  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
  backtoHomePage(){
   // this.router.navigate(['/home']);
  }
}
