import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ScheduledShiftsPage } from './scheduled-shifts';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { ScheduleShiftsPageRoutingModule } from './scheduled-shifts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduleShiftsPageRoutingModule
  ],
  declarations: [
    ScheduledShiftsPage,
    ScheduleFilterPage
  ],
  entryComponents: [
    ScheduleFilterPage
  ]
})
export class ScheduleShiftsModule { }
