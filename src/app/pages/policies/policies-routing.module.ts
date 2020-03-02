import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PoliciesPage } from './policies';

const routes: Routes = [
  {
    path: '',
    component: PoliciesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliciesPageRoutingModule { }
