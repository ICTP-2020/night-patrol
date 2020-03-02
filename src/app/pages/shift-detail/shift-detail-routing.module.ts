import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShiftDetailPage } from './shift-detail';

const routes: Routes = [
  {
    path: '',
    component: ShiftDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShiftDetailPageRoutingModule { }
