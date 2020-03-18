import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';

import { ConferenceData } from '../../../providers/conference-data';

@Component({
  selector: 'page-shift-list',
  templateUrl: 'shift-list.html',
  styleUrls: ['./shift-list.scss'],
})
export class ShiftListPage {
  shifts: any[] = [];

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public confData: ConferenceData,
    public inAppBrowser: InAppBrowser,
    public router: Router
  ) {}

  ionViewDidEnter() {
    this.confData.getShifts().subscribe((shifts: any[]) => {
      this.shifts = shifts;
    });
  }

  goToShiftTwitter(shift: any) {
    this.inAppBrowser.create(
      `https://twitter.com/${shift.twitter}`,
      '_blank'
    );
  }

  async openShiftShare(shift: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Share ' + shift.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log(
              'Copy link clicked on https://twitter.com/' + shift.twitter
            );
            if (
              (window as any)['cordova'] &&
              (window as any)['cordova'].plugins.clipboard
            ) {
              (window as any)['cordova'].plugins.clipboard.copy(
                'https://twitter.com/' + shift.twitter
              );
            }
          }
        },
        {
          text: 'Share via ...'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  async openContact(shift: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact ' + shift.name,
      buttons: [
        {
          text: `Email ( ${shift.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + shift.email);
          }
        },
        {
          text: `Call ( ${shift.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + shift.phone);
          }
        }
      ]
    });

    await actionSheet.present();
  }
}
