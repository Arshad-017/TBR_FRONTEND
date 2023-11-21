import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  searchForm!:any;
  constructor() { }
  serachRequest!:any;

  setSearchData(data:any){
     this.searchForm= data;
  }

  getSearchData():any{
    return this.searchForm;
  }

  setRequestDataInSession(req:any){
      this.serachRequest=req;
  }

  getRequestDataInSession():any {
    return this.serachRequest;
  }
}
