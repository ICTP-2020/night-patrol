import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { PoliciesModule } from '../policies/policies.module';
import { ReportPageModule } from '../report/report.module';
import { AvailabilityModule } from '../availability/availability.module';
import { ShiftDetailModule } from '../shifts/shift-detail/shift-detail.module';
import { ScheduleShiftsModule } from '../shifts/scheduled-shifts/scheduled-shifts.module';

@NgModule({
  imports: [
    PoliciesModule,
    CommonModule,
    IonicModule,
    ReportPageModule,
    AvailabilityModule,
    ShiftDetailModule,
    ScheduleShiftsModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
