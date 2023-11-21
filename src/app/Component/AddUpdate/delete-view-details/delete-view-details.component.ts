import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/Service/AddUpdate/search.service';
import { DeleteEmployeeService } from 'src/app/Service/delete-employee.service';

@Component({
  selector: 'app-delete-view-details',
  templateUrl: './delete-view-details.component.html',
  styleUrls: ['./delete-view-details.component.css'],
})
export class DeleteViewDetailsComponent implements OnInit {
  emp_id: any = '';
  respData!: any;
  oneOnjData!: any;
  MALE: string = 'male';
  FEMALE: string = 'female';
  successMessage!: string;
  errorCommentMessage: boolean = false;
  disableValue:boolean=false;
  comments: string="";
  constructor(
    private routerMap: ActivatedRoute,
    private service: SearchService,
    private router: Router,
    private deleteService: DeleteEmployeeService
  ) {}

  ngOnInit(): void {
    this.emp_id = this.routerMap.snapshot.paramMap.get('emp_id');
    this.service
      .getDataofTbrEmployeeOfSpecificEmployee(this.emp_id)
      .subscribe((data) => {
        this.respData = data.data;
        this.oneOnjData = this.respData[0];
      });
  }

  backtoHomePage() {
    this.router.navigate(['addUpadte/delete']);
  }

  delete() {
    this.errorCommentMessage=false;
    //console.log(this.Authenticate())
    if (this.Authenticate()) {
      this.oneOnjData.DEL_IND = 'Y';
      this.oneOnjData.Comments = this.comments;
      console.log(this.oneOnjData)
     // this.disableValue=true;
      //this.successMessage = "The Employee Record is reomved from DataBase...";
      this.deleteService.deleteEmployee(this.oneOnjData).subscribe((data) => {
        this.successMessage = data.message;
        this.disableValue=true;
      });
    } else {
      this.errorCommentMessage = true;
    }
  }

  Authenticate(): boolean {
    if (this.comments.trim().length > 0) {
      return true;
    }
    return false;
  }
}
