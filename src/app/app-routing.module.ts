import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { ResultsPageComponent } from './dashboard/results-page/results-page.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component:ResultsPageComponent
  },
  {
    path: '',
    component:LandingPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [DataTableComponent, LandingPageComponent]