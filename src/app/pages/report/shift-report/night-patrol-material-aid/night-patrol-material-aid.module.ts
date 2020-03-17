import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NightPatrolMaterialAidPageRoutingModule } from './night-patrol-material-aid-routing.module';

import { NightPatrolMaterialAidPage } from './night-patrol-material-aid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NightPatrolMaterialAidPageRoutingModule
  ],
  declarations: [NightPatrolMaterialAidPage]
})
export class NightPatrolMaterialAidPageModule {}
