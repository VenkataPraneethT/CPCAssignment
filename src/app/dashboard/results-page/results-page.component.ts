import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../../others/services';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})
export class ResultsPageComponent implements OnInit {
  headersData = [
    [20], [20,40] , [40,60], [60]
  ];
  headerTitle = "Citizen's Age";
  columnHeaders = ["id", "name", "description", "age", "update"];
  
  constructor(private udService: UserDetailsService) { }

  ngOnInit() {
    this.udService.setColumnHeaders(this.columnHeaders);
    this.udService.setHeaders(this.headersData);
    // const values= this.udService.getHeaders();
  }


}
