import { Component, OnInit, ViewChild , Input} from '@angular/core';
import { UserDetailsService } from '../../others/services';
import { UserDetail } from '../../others/models';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  columnsData: string[];
  tagTitle: string;
  userData;

  constructor(private udService: UserDetailsService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.columnsData = this.udService.getColumns();
    this.udService.headerTabClicked.subscribe((data:any) => {
      this.tagTitle = Object.keys(data)[0];
      const finalData = data[this.tagTitle];
      this.userData = new MatTableDataSource<UserDetail>(finalData);
      this.userData.paginator = this.paginator;
      this.userData.sort = this.sort;
    })
  }

  redirectToEdit(data) {
    console.log(data, "data")
  }

}
