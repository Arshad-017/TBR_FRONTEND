
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewService } from 'src/app/Service/AddUpdate/view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent  implements OnInit{


  tbrEmployeeWholeData!:any;
  tbrEmployee!:any;
  stIndex:number=0;
  endIndex:number=10;
  totalRecords:number=0;
  stPgIndex:number=0;
  endPgIndex:number=9;
  insideUpperLimit:boolean=true;
  insideLowerLimit:boolean=true;
  setUpperLimit:number=0;
  
  constructor(private service : ViewService , private router : Router){
    
  }
  ngOnInit() {
    this.service.getDataForViewComponent().subscribe(data=>{
    
      this.tbrEmployee = data.data;
      this.totalRecords = this.tbrEmployee.length;
      let temp1 = this.totalRecords % 10;
      if (temp1 == 0) {
        this.setUpperLimit = this.totalRecords / 10 - 1;
      } else {
        this.setUpperLimit = this.totalRecords / 10;
      }
      
  })
  }

  pagination(pos:any){
    this.stIndex= pos*10;
    this.endIndex =  this.stIndex + 10 ;
    this.router.navigate(['addUpadte/view'])
    
  }

  reindexNextPagination(pos:number){
    if(this.validateLimit(pos+1)){
      this.stPgIndex=pos+1;
      this.endPgIndex=this.stPgIndex+ 10;
    }else{
      this.stPgIndex=pos+1;
      this.endPgIndex=this.setUpperLimit;
    }
    
    
  }

  reindexBackPagination(pos:number){
    
      this.endPgIndex=pos-1;
      this.stPgIndex=this.endPgIndex-9;
    

    
}

validateLimit(pos:number):boolean{
  this.setUpperLimit=0;
  let temp1 = this.totalRecords%10;
  if(temp1==0){
    this.setUpperLimit=( this.totalRecords/10 ) - 1;
  }
  else{
     this.setUpperLimit=( this.totalRecords/10 );
  }
  if(pos+10 > this.setUpperLimit){
    return false;
  }else{
    return true;
  }
  
 
  return false;
}


  
  


}
