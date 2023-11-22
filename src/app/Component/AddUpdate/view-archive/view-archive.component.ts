import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewService } from 'src/app/Service/AddUpdate/view.service';

@Component({
  selector: 'app-view-archive',
  templateUrl: './view-archive.component.html',
  styleUrls: ['./view-archive.component.css']
})
export class ViewArchiveComponent implements OnInit{
  tbrEmployeeWholeData!: any;
  tbrEmployee!: any;
  stIndex: number = 0;
  endIndex: number = 10;
  totalRecords: number = 0;
  stPgIndex: number = 0;
  endPgIndex: number = 9;
  insideUpperLimit: boolean = true;
  insideLowerLimit: boolean = true;
  setUpperLimit: number = 0;
  MALE: string = 'male';
  FEMALE: string = 'female';
  emptest!: string;
  clicked: boolean = true;
  showViewMatchesDiv!:boolean;
  constructor(private service: ViewService, private router: Router) {}
  ngOnInit() {
    //this.showId=false;
    this.service.getDataForArchiveViewComponent().subscribe((data) => {
      this.tbrEmployee = data.data;
      this.totalRecords = this.tbrEmployee.length;
      let temp1 = this.totalRecords % 10;
      if(data.records_count>0){
        this.showViewMatchesDiv=true;
      }else{
        this.showViewMatchesDiv=false;
      }
      if (temp1 == 0) {
        this.setUpperLimit = this.totalRecords / 10 - 1;
      } else {
        this.setUpperLimit = this.totalRecords / 10;
      }
    });
  }

  pagination(pos: any) {
    //this.showId=false;
    this.stIndex = pos * 10;
    this.endIndex = this.stIndex + 10;
    this.router.navigate(['addUpadte/view']);
  }

  reindexNextPagination(pos: number) {
    //this.showId=false;
    if (this.validateLimit(pos + 1)) {
      this.stPgIndex = pos + 1;
      this.endPgIndex = this.stPgIndex + 10;
    } else {
      this.stPgIndex = pos + 1;
      this.endPgIndex = this.setUpperLimit;
    }
  }

  reindexBackPagination(pos: number) {
    //this.showId=false;
    this.endPgIndex = pos - 1;
    this.stPgIndex = this.endPgIndex - 9;
  }

  validateLimit(pos: number): boolean {
    //this.showId=false;
    this.setUpperLimit = 0;
    let temp1 = this.totalRecords % 10;
    if (temp1 == 0) {
      this.setUpperLimit = this.totalRecords / 10 - 1;
    } else {
      this.setUpperLimit = this.totalRecords / 10;
    }
    if (pos + 10 > this.setUpperLimit) {
      return false;
    } else {
      return true;
    }

    return false;
  } 

 
}
