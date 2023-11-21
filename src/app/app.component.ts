import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AM SOFT';
  
  
  showPage:boolean = sessionStorage.getItem('showPage') ? true : false;
  

  Authenticate(value:boolean){
    let stest = "true"
    if(value==true)
       stest = "1"
    else
      stest="0"
    sessionStorage.setItem('showPage' , stest);
    this.showPage=value;
  }
}
