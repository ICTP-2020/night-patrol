import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScheduledShiftsPage } from './scheduled-shifts';

const routes: Routes = [
  {
    path: '',
    component: ScheduledShiftsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleShiftsPageRoutingModule { }
