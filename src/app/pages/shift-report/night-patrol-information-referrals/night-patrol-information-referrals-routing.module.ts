import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NightPatrolInformationReferralsPage } from './night-patrol-information-referrals.page';

const routes: Routes = [
  {
    path: '',
    component: NightPatrolInformationReferralsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NightPatrolInformationReferralsPageRoutingModule {}
