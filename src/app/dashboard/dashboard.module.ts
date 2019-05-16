import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { RouterModule } from '@angular/router';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ResultsPageComponent } from './results-page/results-page.component';
import { TableHeaderComponent } from './table-header/table-header.component';

@NgModule({
  declarations: [DataTableComponent, ResultsPageComponent, TableHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatButtonModule
  ],
  exports:[
    ResultsPageComponent,
    MatTableModule,
  ]
})
export class DashboardModule { }
