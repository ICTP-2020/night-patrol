import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialEventsReportPage } from './special-events-report.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialEventsReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialEventsReportPageRoutingModule {}
