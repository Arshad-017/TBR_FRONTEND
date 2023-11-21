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
  constructor(private fb : FormBuilder,
    private notifyus : ContactusService){

  }
  notify(){
    this.submitted=true;
    this.notifyus.notifyus(this.notifyForm.value).subscribe(data=>{
      this.respMessage=data.message;
    })
    
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
