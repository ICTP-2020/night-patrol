import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { PoliciesModule } from '../policies/policies.module';
import { MapModule } from '../report/report.module';
import { AvailabilityModule } from '../availability/availability.module';
import { SessionDetailModule } from '../session-detail/session-detail.module';
import { ShiftDetailModule } from '../shift-detail/shift-detail.module';
import { ShiftListModule } from '../shift-list/shift-list.module';

@NgModule({
  imports: [
    PoliciesModule,
    CommonModule,
    IonicModule,
    MapModule,
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
