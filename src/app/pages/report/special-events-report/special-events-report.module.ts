import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialEventsReportPageRoutingModule } from './special-events-report-routing.module';

import { SpecialEventsReportPage } from './special-events-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialEventsReportPageRoutingModule
  ],
  declarations: [SpecialEventsReportPage]
})
export class SpecialEventsReportPageModule {}
