import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/Service/AddUpdate/search.service';
import { ShareDataService } from 'src/app/Service/AddUpdate/share-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  searchForm!:FormGroup;
  respData!:any;
  message!:any;
  constructor(private fb :FormBuilder,
    private service : SearchService,
    private sharedService : ShareDataService,
    private router : Router){
    
    
  }
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      prefixFirstName : ['Exact Match', ],
      prefixLastName : ['Exact Match'],
      first_name : ['' , Validators.required],
      last_name : ['', Validators.required],
      email : ['' , Validators.required],
      emp_id : ['' , Validators.required],
    })
  }
  

  resetForm(){
    this.searchForm.controls['last_name'].reset();
    this.searchForm.controls['first_name'].reset();
    this.searchForm.controls['email'].reset();
    this.searchForm.controls['emp_id'].reset();
     
  }
  searchData(){
    
    console.log(this.searchForm.value)
    sessionStorage.setItem("searchForm" , JSON.stringify(this.searchForm.value))
    this.sharedService.setRequestDataInSession(this.searchForm.value);
    this.router.navigate(['addUpadte/searchParentMatches']);
  }

}
