import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShiftDetailPage } from './shift-detail';
import { ShiftDetailPageRoutingModule } from './shift-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ShiftDetailPageRoutingModule
  ],
  declarations: [
    ShiftDetailPage,
  ]
})
export class ShiftDetailModule { }
