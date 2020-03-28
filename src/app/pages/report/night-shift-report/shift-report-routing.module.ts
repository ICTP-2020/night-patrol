import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShiftReportPage } from './shift-report.page';

const routes: Routes = [
  {
    path: '',
    component: ShiftReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShiftReportPageRoutingModule {}
