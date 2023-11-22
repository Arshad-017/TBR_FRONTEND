import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/Service/AddUpdate/search.service';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit{
  emp_id:any="";
  respData!:any;
  oneOnjData!:any;
  MALE:string = "male";
  FEMALE:string = "female";
   constructor(private routerMap : ActivatedRoute,
    private service : SearchService,
    private router : Router){}
  
  ngOnInit(): void {
    this.emp_id = this.routerMap.snapshot.paramMap.get('emp_id');
    this.service.getDataofTbrEmployeeOfSpecificEmployee(this.emp_id).
    subscribe(data=>{
      this.respData = data.data ;
      this.oneOnjData = this.respData[0];
    })
  }


  backtoHomePage(){
   this.router.navigate(['addUpadte/search'])
  }

  backtoSearchParentMatches(){
    this.router.navigateByUrl("addUpadte/searchParentMatches")
  }




}
