import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { PoliciesModule } from '../policies/policies.module';
import { ReportPageModule } from '../report/report.module';
import { AvailabilityModule } from '../availability/availability.module';
import { SessionDetailModule } from '../shifts/session-detail/session-detail.module';
import { ShiftDetailModule } from '../shifts/shift-detail/shift-detail.module';
import { ShiftListModule } from '../shifts/shift-list/shift-list.module';

@NgModule({
  imports: [
    PoliciesModule,
    CommonModule,
    IonicModule,
    ReportPageModule,
    AvailabilityModule,
    SessionDetailModule,
    ShiftDetailModule,
    ShiftListModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
