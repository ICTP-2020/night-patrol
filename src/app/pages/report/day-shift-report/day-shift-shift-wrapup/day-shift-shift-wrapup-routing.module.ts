import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DayShiftShiftWrapupPage } from './day-shift-shift-wrapup.page';

const routes: Routes = [
  {
    path: '',
    component: DayShiftShiftWrapupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DayShiftShiftWrapupPageRoutingModule {}
