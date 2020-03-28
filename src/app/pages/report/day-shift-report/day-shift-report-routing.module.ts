import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DayShiftReportPage } from './day-shift-report.page';

const routes: Routes = [
  {
    path: '',
    component: DayShiftReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DayShiftReportPageRoutingModule {}
