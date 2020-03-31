import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatPage } from './chat';

const routes: Routes = [
  {
    path: '',
    component: ChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatPageRoutingModule { }
