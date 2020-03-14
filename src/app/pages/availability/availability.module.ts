import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AvailabilityPage as AvailabilityPage } from './availability';
import { AvailabilityFilterPage } from '../availability-filter/availability-filter';
import { AvailabilityPageRoutingModule } from './availability-routing.module';

// Calendar UI Module
import { NgCalendarModule  } from 'ionic2-calendar';
import { CalendarModule } from "ion2-calendar";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvailabilityPageRoutingModule,
    NgCalendarModule,
    CalendarModule
  ],
  declarations: [
    AvailabilityPage,
    AvailabilityFilterPage,
  ],
  entryComponents: [
    AvailabilityFilterPage
  ]
  //, providers: [{ provide: LOCALE_ID, useValue: 'zh-CN' }]
})
export class AvailabilityModule { }
