import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, withDisabledInitialNavigation } from '@angular/router';
import { SearchService } from 'src/app/Service/AddUpdate/search.service';
import { UpdateService } from 'src/app/Service/AddUpdate/update.service';

@Component({
  selector: 'app-update-view-details',
  templateUrl: './update-view-details.component.html',
  styleUrls: ['./update-view-details.component.css']
})
export class UpdateViewDetailsComponent implements OnInit {

  emp_id: any = "";
  respData!: any;
  oneOnjData!: any;
  MALE: string = "male";
  FEMALE: string = "female";
  updateSuccessMessage!: string;
  updateForm!: FormGroup;
  isHideBtton:boolean=false;
  constructor(private routerMap: ActivatedRoute,
    private service: SearchService,
    private router: Router,
    private fb: FormBuilder,
    private updtService: UpdateService) { }
  ngOnInit() {

    this.emp_id = this.routerMap.snapshot.paramMap.get('emp_id');
    this.service.getDataofTbrEmployeeOfSpecificEmployee(this.emp_id).
      subscribe(data => {
        this.respData = data.data;
        this.oneOnjData = this.respData[0];
        this.updateForm = this.fb.group({
          first_name: [this.oneOnjData.first_name, Validators.required],
          last_name: [this.oneOnjData.last_name, Validators.required],
          email: [this.oneOnjData.email, Validators.required],
          phone: [this.oneOnjData.phone, Validators.required],
          age: [this.oneOnjData.age, Validators.required],
          job_title: [this.oneOnjData.job_title, Validators.required],
          gender: [{ value: this.oneOnjData.gender, disabled: true }, Validators.required],
          years_of_experience: [this.oneOnjData.years_of_experience, Validators.required],
          salary: [this.oneOnjData.salary, Validators.required],
          department: [this.oneOnjData.department, Validators.required],
          emp_id: [{ value: this.oneOnjData.emp_id, disabled: true },],
        })
      })

  }


  backtoHomePage() {
    this.router.navigateByUrl("addUpadte/update");
  }

  backtoSearchParentMatches(){
    this.router.navigateByUrl("addUpadte/updateParentMatches");
  }
  updateEmployee() {
    this.updateForm.controls['emp_id'].enable();
    this.updateForm.controls['gender'].enable();
    console.log(this.updateForm.value)
    this.updtService.udpateData(this.updateForm.value).subscribe(
      data => {
        this.updateSuccessMessage = data.message;
        if (this.updateSuccessMessage.length >= 0) {
          this.disableFields()
          this.isHideBtton=true;
        }
      }
    )
  }


  disableFields() {
    this.updateForm.controls['first_name'].disable();
    this.updateForm.controls['last_name'].disable();
    this.updateForm.controls['email'].disable();
    this.updateForm.controls['phone'].disable();
    this.updateForm.controls['age'].disable();
    this.updateForm.controls['job_title'].disable();
    this.updateForm.controls['gender'].disable();
    this.updateForm.controls['years_of_experience'].disable();
    this.updateForm.controls['salary'].disable();
    this.updateForm.controls['department'].disable();
    this.updateForm.controls['emp_id'].disable();
  }
}
