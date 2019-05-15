import { Injectable, Output, EventEmitter } from '@angular/core';
import { tableData } from '../../mock-data/test-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  tableLegendHeaders;
  tableBodyColumnHeaders;
  filteredDetails;

  @Output() headerTabClicked = new EventEmitter<string>();

  constructor() { }


  getTableData(): any {
    const tableDataObservable = new Observable(observer => {
      setTimeout(() => {
          observer.next(tableData);
      }, 1000);
    });

    return tableDataObservable;
  }

  setColumnHeaders(columnHeaders): any {
    this.tableBodyColumnHeaders = columnHeaders;
  }
  
  getColumns(): string[]{
    return this.tableBodyColumnHeaders;
  }

  setHeaders(dataObj) : any {
    this.tableLegendHeaders =  dataObj;
  }

  getHeaders(): string[]{
    return  this.tableLegendHeaders;
  }

  setFilteredData(inputObj): any {
    this.filteredDetails = inputObj;
  }

  getFilteredData() : any {
    return this.filteredDetails;
  }

  handleHeaderTabClick(dataObj: any) {
    this.headerTabClicked.emit(dataObj);
  }

}
