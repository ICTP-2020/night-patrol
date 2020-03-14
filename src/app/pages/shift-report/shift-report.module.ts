import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShiftReportPageRoutingModule } from './shift-report-routing.module';

import { ShiftReportPage } from './shift-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShiftReportPageRoutingModule
  ],
  declarations: [ShiftReportPage]
})
export class ShiftReportPageModule {}
