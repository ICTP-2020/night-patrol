import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NightPatrolInformationReferralsPageRoutingModule } from './night-patrol-information-referrals-routing.module';

import { NightPatrolInformationReferralsPage } from './night-patrol-information-referrals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NightPatrolInformationReferralsPageRoutingModule
  ],
  declarations: [NightPatrolInformationReferralsPage]
})
export class NightPatrolInformationReferralsPageModule {}
