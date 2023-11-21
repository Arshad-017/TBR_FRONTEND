import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/Service/AddUpdate/share-data.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  
  updateForm!:FormGroup;
  constructor(private fb :FormBuilder,
    private sharedService : ShareDataService ,
    private router : Router){
    
  }
  ngOnInit(): void {
    this.updateForm = this.fb.group({
      prefixFirstName : ['Exact Match'],
      prefixLastName : ['Exact Match'],
      first_name : ['' , Validators.required],
      last_name : ['', Validators.required],
      email : ['' , Validators.required],
      emp_id : ['' , Validators.required],
    })
  }

  resetForm(){
    this.updateForm.controls['first_name'].reset();
    this.updateForm.controls['last_name'].reset();
    this.updateForm.controls['email'].reset();
    this.updateForm.controls['emp_id'].reset();
     
  }
  updateData(){
    this.sharedService.setRequestDataInSession(this.updateForm.value);
    sessionStorage.setItem("updateForm" , JSON.stringify(this.updateForm.value) );
    this.router.navigateByUrl('addUpadte/updateParentMatches');
  }

}
