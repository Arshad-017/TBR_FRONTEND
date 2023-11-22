import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactusService } from 'src/app/Service/contactus.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  notifyForm!:FormGroup;
  submitted:boolean=false;
  respMessage!:string;
  allFiledsRequired:boolean = false;
  constructor(private fb : FormBuilder,
    private notifyus : ContactusService){

  }
  notify(){
    this.allFiledsRequired = false;
    if(this.Authenticate()){
      this.submitted=true;
      this.notifyus.notifyus(this.notifyForm.value).subscribe(data=>{
      this.respMessage=data.message;
    })
    }
    else{
      this.allFiledsRequired = true;
    }
    
  }
  Authenticate(){
    if(this.notifyForm.get('fullname')?.value.length==0 || this.notifyForm.get('email')?.value.length==0 ||
       this.notifyForm.get('subject')?.value.length==0 || this.notifyForm.get('message')?.value.length==0)
    {
      return false;
    }
    return true;
  }
  ngOnInit() {
      this.notifyForm = this.fb.group({
        fullname : ['' ],
        email : ['' ],
        subject : ['' ],
        message : ['' ],

      })
  }
  
   
}
