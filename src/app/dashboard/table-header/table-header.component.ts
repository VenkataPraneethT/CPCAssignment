import { Component, OnInit, Input } from '@angular/core';
import { UserDetailsService } from '../../others/services';
import { UserDetail } from '../../others/models';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {
  userData;
  headersData: string[];
  filteredDataObj: any [];
  selectedColumn =0;

  @Input() headerTitle: string;
  constructor(private udService: UserDetailsService) { }

  ngOnInit() {
    this.udService.getTableData().subscribe((tableData: UserDetail[]) => {
      this.userData = tableData;
      this.processHeaders();
      this.udService.setFilteredData(this.filteredDataObj);
      this.udService.handleHeaderTabClick(this.filteredDataObj[this.selectedColumn] );
    })
  }

  processHeaders()  {
    const headers = this.udService.getHeaders();
    const finalHeaders = [];
    const processedOutputData = [];
   
    for(let headerTitle =0; headerTitle< headers.length ; headerTitle+=1){
      let result;
      if(Array.isArray(headers[headerTitle]) && headers[headerTitle].length === 2){
        result = this.getResultCountForEachHeader(headers[headerTitle], 'bt', `${headers[headerTitle][0]} to ${headers[headerTitle][1]}yrs`);
        finalHeaders.push(result.headerData);
        processedOutputData.push(result.filteredData);
      }
      else if(headerTitle ===0){
        result = this.getResultCountForEachHeader(headers[headerTitle], 'lt', `below ${headers[headerTitle][0]}yrs`);
        finalHeaders.push(result.headerData);
        processedOutputData.push(result.filteredData);
      }
      else {
        result = this.getResultCountForEachHeader(headers[headerTitle], 'gt', `above ${headers[headerTitle][0]}yrs`);
        finalHeaders.push(result.headerData);
        processedOutputData.push(result.filteredData);
      }
    }
    this.headersData = finalHeaders;
    this.filteredDataObj = processedOutputData;
  }

  setActiveColumn(headerIndex, key) {
    this.selectedColumn = headerIndex;
    this.udService.handleHeaderTabClick(this.filteredDataObj[headerIndex]);
  }

  getResultCountForEachHeader(inputData, rangeKey, objKey) {
    const finalObj ={
      headerData:{
        title:objKey,
      },
      filteredData:{
        [objKey]:[]
      }
    };
    
    for(let data =0; data< this.userData.length ; data+=1){
      if(rangeKey === 'lt'){
        if(Number(this.userData[data].age) < inputData[0]){
          finalObj.headerData[objKey] = finalObj.headerData[objKey] !== undefined ? finalObj.headerData[objKey]+=1 : 1;
          finalObj.filteredData[objKey].push(this.userData[data]);
        }
      }
      else if(rangeKey === 'bt'){
        if(Number(this.userData[data].age) >= inputData[0] && Number(this.userData[data].age) < inputData[1] ){
          finalObj.headerData[objKey] = finalObj.headerData[objKey] !== undefined ? finalObj.headerData[objKey]+=1 : 1;
          finalObj.filteredData[objKey].push(this.userData[data]);
        }
      }
      else if(rangeKey === 'gt'){
        if(Number(this.userData[data].age) >= inputData[0]){
          finalObj.headerData[objKey] = finalObj.headerData[objKey] !== undefined ? finalObj.headerData[objKey]+=1 : 1;
          finalObj.filteredData[objKey].push(this.userData[data]);
        }
      }
    }
    return finalObj;
  }

}
