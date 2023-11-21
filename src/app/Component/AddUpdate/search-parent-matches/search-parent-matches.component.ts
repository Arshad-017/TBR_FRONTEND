import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/Service/AddUpdate/search.service';
import { ShareDataService } from 'src/app/Service/AddUpdate/share-data.service';

@Component({
  selector: 'app-search-parent-matches',
  templateUrl: './search-parent-matches.component.html',
  styleUrls: ['./search-parent-matches.component.css']
})
export class SearchParentMatchesComponent implements OnInit {


  MALE: string = 'male';
  FEMALE: string = 'female'
  searchReq!: any;
  totalRecords: number = -1;
  showParentMatchesDiv!: boolean;
  searchRespData!: any
  isUpdateFlow: boolean = false;
  updateFlow: any = "";
  constructor(private sharedService: ShareDataService,
    private serachService: SearchService,
    private router: Router,
    private route: ActivatedRoute) {

  }
   ngOnInit() {
    this.searchReq = sessionStorage.getItem("searchForm");
    this.searchReq = JSON.parse(this.searchReq);
    //this.searchReq = await this.sharedService.getRequestDataInSession();
    this.serachService.getDataOfTbrEmployee(this.searchReq).subscribe( data => {
      this.searchRespData = data.data;
      this.totalRecords = data.records_count;
      if (this.totalRecords >= 1) {
        this.showParentMatchesDiv = true

      } else {
        this.showParentMatchesDiv = false;
      }
      
    });
  }

  showDetails(emp_id: string) {

    let url = `addUpadte/viewEmployeeDetails/${emp_id}`;
    this.router.navigate([url])
  }
  

  backToSearchPage() {
    let url = "addUpadte/search";
    this.router.navigate([url])
  }

}
