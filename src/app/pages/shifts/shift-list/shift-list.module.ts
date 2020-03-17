import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ShiftListPage } from './shift-list';
import { ShiftListPageRoutingModule } from './shift-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ShiftListPageRoutingModule
  ],
  declarations: [ShiftListPage],
})
export class ShiftListModule {}
