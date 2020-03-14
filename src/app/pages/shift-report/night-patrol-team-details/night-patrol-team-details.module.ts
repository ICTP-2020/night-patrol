import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NightPatrolTeamDetailsPageRoutingModule } from './night-patrol-team-details-routing.module';

import { NightPatrolTeamDetailsPage } from './night-patrol-team-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NightPatrolTeamDetailsPageRoutingModule
  ],
  declarations: [NightPatrolTeamDetailsPage]
})
export class NightPatrolTeamDetailsPageModule {}
