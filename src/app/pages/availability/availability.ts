import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';

import { AvailabilityFilterPage } from '../availability-filter/availability-filter';
import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';

import {
  CalendarComponentOptions,
  CalendarModal,
  CalendarModalOptions,
  DayConfig,
  CalendarResult
} from 'ion2-calendar';

@Component({
  selector: 'page-availability',
  templateUrl: 'availability.html',
  styleUrls: ['./availability.scss'],
})
export class AvailabilityPage implements OnInit {
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dateRange: { from: '2019-05-02'; to: '2019-05-07'; };
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };

  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  };

  async basic()
  {
    const options: CalendarModalOptions = {
      title: 'BASIC',
      color:'dark'
    };

    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options }
      
    });

    myCalendar.present();

    const event: any = await myCalendar.onDidDismiss();
    const date: CalendarResult = event.data;
    console.log(date);
  
  }

  async multiple()
  {
    const options = {
      pickMode: 'multi',
      title: 'MULTI',
    };
  
    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options },
      cssClass:'mbg'
    });
  
    myCalendar.present();
  
    const event: any = await myCalendar.onDidDismiss();
    const date: CalendarResult = event.data;
    console.log(date);
  }

  async range()
  {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: 'RANGE',
      color:'danger'
    };
  
    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options }
    });
  
    myCalendar.present();
  
    const event: any = await myCalendar.onDidDismiss();
    const date = event.data;
    const from: CalendarResult = date.from;
    const to: CalendarResult = date.to;
  
    console.log(date, from, to);
  }

}
  
//   // Gets a reference to the list element
//   @ViewChild('availabilityList', { static: true }) availabilityList: IonList;

//   ios: boolean;
//   dayIndex = 0;
//   queryText = '';
//   segment = 'all';
//   excludeTracks: any = [];
//   shownSessions: any = [];
//   groups: any = [];
//   confDate: string;

//   constructor(
//     public alertCtrl: AlertController,
//     public confData: ConferenceData,
//     public loadingCtrl: LoadingController,
//     public modalCtrl: ModalController,
//     public router: Router,
//     public toastCtrl: ToastController,
//     public user: UserData,
//     public config: Config
//   ) { }

//   ngOnInit() {
//     this.updateAvailability();

//     this.ios = this.config.get('mode') === 'ios';
//   }

//   updateAvailability() {
//     // Close any open sliding items when the availability updates
//     if (this.availabilityList) {
//       this.availabilityList.closeSlidingItems();
//     }

//     this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
//       this.shownSessions = data.shownSessions;
//       this.groups = data.groups;
//     });
//   }

//   async presentFilter() {
//     const modal = await this.modalCtrl.create({
//       component: AvailabilityFilterPage,
//       componentProps: { excludedTracks: this.excludeTracks }
//     });
//     await modal.present();

//     const { data } = await modal.onWillDismiss();
//     if (data) {
//       this.excludeTracks = data;
//       this.updateAvailability();
//     }
//   }

//   async addFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any) {
//     if (this.user.hasFavorite(sessionData.name)) {
//       // woops, they already favorited it! What shall we do!?
//       // prompt them to remove it
//       this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
//     } else {
//       // remember this session as a user favorite
//       this.user.addFavorite(sessionData.name);

//       // create an alert instance
//       const alert = await this.alertCtrl.create({
//         header: 'Favorite Added',
//         buttons: [{
//           text: 'OK',
//           handler: () => {
//             // close the sliding item
//             slidingItem.close();
//           }
//         }]
//       });
//       // now present the alert on top of all other content
//       await alert.present();
//     }

//   }

//   async removeFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any, title: string) {
//     const alert = await this.alertCtrl.create({
//       header: title,
//       message: 'Would you like to remove this session from your favorites?',
//       buttons: [
//         {
//           text: 'Cancel',
//           handler: () => {
//             // they clicked the cancel button, do not remove the session
//             // close the sliding item and hide the option buttons
//             slidingItem.close();
//           }
//         },
//         {
//           text: 'Remove',
//           handler: () => {
//             // they want to remove this session from their favorites
//             this.user.removeFavorite(sessionData.name);
//             this.updateAvailability();

//             // close the sliding item and hide the option buttons
//             slidingItem.close();
//           }
//         }
//       ]
//     });
//     // now present the alert on top of all other content
//     await alert.present();
//   }

//   async openSocial(network: string, fab: HTMLIonFabElement) {
//     const loading = await this.loadingCtrl.create({
//       message: `Posting to ${network}`,
//       duration: (Math.random() * 1000) + 500
//     });
//     await loading.present();
//     await loading.onWillDismiss();
//     fab.close();
//   }
// }
