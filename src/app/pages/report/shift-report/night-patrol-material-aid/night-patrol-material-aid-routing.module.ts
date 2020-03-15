import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NightPatrolMaterialAidPage } from './night-patrol-material-aid.page';

const routes: Routes = [
  {
    path: '',
    component: NightPatrolMaterialAidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NightPatrolMaterialAidPageRoutingModule {}
