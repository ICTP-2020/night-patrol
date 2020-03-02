import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AvailabilityPage as AvailabilityPage } from './availability';
import { AvailabilityFilterPage } from '../availability-filter/availability-filter';
import { AvailabilityPageRoutingModule } from './availability-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvailabilityPageRoutingModule
  ],
  declarations: [
    AvailabilityPage,
    AvailabilityFilterPage
  ],
  entryComponents: [
    AvailabilityFilterPage
  ]
})
export class AvailabilityModule { }
