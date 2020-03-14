import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NightPatrolTeamDetailsPage } from './night-patrol-team-details.page';

const routes: Routes = [
  {
    path: '',
    component: NightPatrolTeamDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NightPatrolTeamDetailsPageRoutingModule {}
