import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactusService } from 'src/app/Service/contactus.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   
  contactForm1!:FormGroup;
  userLoggedIn!:any;
  isSubmitted:boolean=false;
  respMessage!:string;
  MessageMandantory:boolean=false;
  emailMandantory:boolean=false;
  nameMandantory:boolean=false;
  constructor(private fb : FormBuilder,
    private contactUs : ContactusService){

  }
   ngOnInit() {
      this.userLoggedIn = sessionStorage.getItem("userLoginDetails");
      this.userLoggedIn = JSON.parse(this.userLoggedIn);
      this.contactForm1= this.fb.group({
              fullname : [this.userLoggedIn.fullName , Validators.required],
              email : [this.userLoggedIn.emailId , Validators.required],
              message : ['' , Validators.required] ,
          })
   }


   Authenticate():boolean{
       this.MessageMandantory=false;
       this.emailMandantory=false;
       this.nameMandantory=false;
       if(this.contactForm1.get('message')?.value.length > 0){
           if(this.contactForm1.get('fullname')?.value.length > 0){
               if(this.contactForm1.get('email')?.value.length > 0){
                  return true;
               }
               else{
                this.emailMandantory=true;
               }
           }
           else{
            this.nameMandantory=true;
           }
       }else{
        this.MessageMandantory=true;
       }
       return false;
   }
  callContactHelp(){
    if(this.Authenticate())
    console.log(this.contactForm1.value)
    this.contactUs.contactUs(this.contactForm1.value).subscribe(data=>{
      this.respMessage = data.message;
      this.isSubmitted=true;
    })
       
  }

}
