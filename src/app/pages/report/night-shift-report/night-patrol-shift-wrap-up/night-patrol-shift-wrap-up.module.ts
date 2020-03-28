import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NightPatrolShiftWrapUpPageRoutingModule } from './night-patrol-shift-wrap-up-routing.module';

import { NightPatrolShiftWrapUpPage } from './night-patrol-shift-wrap-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NightPatrolShiftWrapUpPageRoutingModule
  ],
  declarations: [NightPatrolShiftWrapUpPage]
})
export class NightPatrolShiftWrapUpPageModule {}
