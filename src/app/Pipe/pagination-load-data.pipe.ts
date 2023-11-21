import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginationLoadData'
})
export class PaginationLoadDataPipe implements PipeTransform {

  paginationtrbEmployee!:any;
  temporaryDataStrored!:any;
  transform(tbrEmployee: any, cuuIndex:number): any {
    this.paginationtrbEmployee=[];
    let temp=0;
    for(let i=cuuIndex;i<10;i++){
      temp++;
      //console.log(tbrEmployee[i])
      Object.keys(tbrEmployee[i]).forEach((key) => {
        this.temporaryDataStrored[key as keyof any] = tbrEmployee[key as keyof any]
      })
      this.paginationtrbEmployee = [ this.temporaryDataStrored , ...this.paginationtrbEmployee];
      if(temp==10){
        break;
      }
     
  }
  return this.paginationtrbEmployee;
}
}
