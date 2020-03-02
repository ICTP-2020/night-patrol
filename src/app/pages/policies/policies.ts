import { Component, ViewEncapsulation } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../policies-popover/policies-popover';

@Component({
  selector: 'page-policies',
  templateUrl: 'policies.html',
  styleUrls: ['./policies.scss'],
})
export class PoliciesPage {
  conferenceDate = '2047-05-17';

  constructor(public popoverCtrl: PopoverController) { }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }
}
