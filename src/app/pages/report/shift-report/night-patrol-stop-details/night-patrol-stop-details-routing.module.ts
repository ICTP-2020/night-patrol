import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NightPatrolStopDetailsPage } from './night-patrol-stop-details.page';

const routes: Routes = [
  {
    path: '',
    component: NightPatrolStopDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NightPatrolStopDetailsPageRoutingModule {}
