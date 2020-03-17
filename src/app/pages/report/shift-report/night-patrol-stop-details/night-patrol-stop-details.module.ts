import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NightPatrolStopDetailsPageRoutingModule } from './night-patrol-stop-details-routing.module';

import { NightPatrolStopDetailsPage } from './night-patrol-stop-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NightPatrolStopDetailsPageRoutingModule
  ],
  declarations: [NightPatrolStopDetailsPage]
})
export class NightPatrolStopDetailsPageModule {}
