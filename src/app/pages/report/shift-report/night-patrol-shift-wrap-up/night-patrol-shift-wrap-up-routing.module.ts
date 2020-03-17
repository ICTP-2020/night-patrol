import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NightPatrolShiftWrapUpPage } from './night-patrol-shift-wrap-up.page';

const routes: Routes = [
  {
    path: '',
    component: NightPatrolShiftWrapUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NightPatrolShiftWrapUpPageRoutingModule {}
