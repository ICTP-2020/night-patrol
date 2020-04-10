import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DayShiftShiftWrapupPageRoutingModule } from './day-shift-shift-wrapup-routing.module';

import { DayShiftShiftWrapupPage } from './day-shift-shift-wrapup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DayShiftShiftWrapupPageRoutingModule
  ],
  declarations: [DayShiftShiftWrapupPage]
})
export class DayShiftShiftWrapupPageModule {}
