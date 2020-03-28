import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DayShiftReportPageRoutingModule } from './day-shift-report-routing.module';

import { DayShiftReportPage } from './day-shift-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DayShiftReportPageRoutingModule
  ],
  declarations: [DayShiftReportPage]
})
export class DayShiftReportPageModule {}
