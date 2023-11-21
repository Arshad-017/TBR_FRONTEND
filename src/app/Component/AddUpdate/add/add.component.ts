import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddDataService } from 'src/app/Service/AddUpdate/add-data.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  addTbrEmpolyeeForm!: FormGroup;
  respData!: string;
  repeatedError!:boolean;
  voidShowDisplay: boolean = false;
  error_first_name: boolean = false;
  error_last_name: boolean = false;
  error_email: boolean = false;
  error_phone: boolean = false;
  error_age: boolean = false;
  error_job_title: boolean = false;
  error_gender: boolean = false;
  error_years_of_experience: boolean = false;
  error_salary: boolean = false;
  error_department: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private addDataService: AddDataService
  ) {}

  ngOnInit(): void {
    this.error_first_name = false;
    this.error_last_name = false;
    this.error_email = false;
    this.error_phone = false;
    this.error_age = false;
    this.error_job_title = false;
    this.error_gender = false;
    this.error_years_of_experience = false;
    this.error_salary = false;
    this.error_department = false;
    this.addTbrEmpolyeeForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      age: ['', Validators.required],
      job_title: ['', Validators.required],
      gender: ['male', Validators.required],
      years_of_experience: ['', Validators.required],
      salary: ['', Validators.required],
      department: ['', Validators.required],
      DEL_IND : ['N'],
      Comments : [""] ,
      emp_id: [],
    });
    this.voidShowDisplay = false;
    this.respData = '';
  }
  addEmployee() {
    this.repeatedError=false;
    if (this.AuthencateValidation()) {
      this.addDataService
        .addDataToDB(this.addTbrEmpolyeeForm.value)
        .subscribe((data) => {
          this.respData = data.message;
          if(data.repeated ==  "true"){
               this.respData = data.message;
               this.repeatedError = true;
          }else
          {
            if (
              this.respData != null &&
              this.respData.endsWith('Added Successfully !!')
            ) {
              this.voidShowDisplay = true;
              this.addTbrEmpolyeeForm.controls['first_name'].disable();
              this.addTbrEmpolyeeForm.controls['last_name'].disable();
              this.addTbrEmpolyeeForm.controls['email'].disable();
              this.addTbrEmpolyeeForm.controls['phone'].disable();
              this.addTbrEmpolyeeForm.controls['age'].disable();
              this.addTbrEmpolyeeForm.controls['gender'].disable();
              this.addTbrEmpolyeeForm.controls['job_title'].disable();
              this.addTbrEmpolyeeForm.controls['years_of_experience'].disable();
              this.addTbrEmpolyeeForm.controls['salary'].disable();
              this.addTbrEmpolyeeForm.controls['department'].disable();
              this.addTbrEmpolyeeForm.controls['emp_id'].disable();
            } else {
              this.voidShowDisplay = false;
            }
          }
        });
    }
  }

  AuthencateValidation(): boolean {
    let flag = false;
    if (this.addTbrEmpolyeeForm.get('first_name')?.value == '') {
      this.error_first_name = true;
      flag = true;
    }
    if (this.addTbrEmpolyeeForm.get('last_name')?.value == '') {
      this.error_last_name = true;
      flag = true;
    }
    if (this.addTbrEmpolyeeForm.get('email')?.value == '') {
      this.error_email = true;
      flag = true;
    }
    if (this.addTbrEmpolyeeForm.get('phone')?.value == '') {
      this.error_phone = true;
      flag = true;
    }
    if (this.addTbrEmpolyeeForm.get('age')?.value == '') {
      this.error_age = true;
      flag = true;
    }
    if (this.addTbrEmpolyeeForm.get('salary')?.value == '') {
      this.error_salary = true;
      flag = true;
    }
    if (this.addTbrEmpolyeeForm.get('department')?.value == '') {
      this.error_department = true;
      flag = true;
    }
    if (this.addTbrEmpolyeeForm.get('years_of_experience')?.value == '') {
      this.error_years_of_experience = true;
      flag = true;
    }
    if (flag) 
     return false;
    else 
     return true;
  }

  BackToMainPage() {
    this.ngOnInit();

    this.router.navigate(['addUpadte/add']);
  }
}
