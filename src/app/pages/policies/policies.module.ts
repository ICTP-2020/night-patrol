import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PoliciesPage } from './policies';
import { PopoverPage } from '../policies-popover/policies-popover';
import { PoliciesPageRoutingModule } from './policies-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliciesPageRoutingModule
  ],
  declarations: [PoliciesPage, PopoverPage],
  entryComponents: [PopoverPage],
  bootstrap: [PoliciesPage],
})
export class PoliciesModule {}
