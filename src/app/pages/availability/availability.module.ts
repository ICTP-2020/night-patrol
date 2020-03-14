import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AvailabilityPage as AvailabilityPage } from './availability';
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
    AvailabilityPage
  ],
})
export class AvailabilityModule { }
