import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ConferenceData } from '../../../providers/conference-data';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../../providers/user-data';
import { Shift } from '../../../interfaces/data-models';
import { User } from '../../../interfaces/data-models';

@Component({
  selector: 'page-shift-detail',
  styleUrls: ['./shift-detail.scss'],
  templateUrl: 'shift-detail.html'
})
export class ShiftDetailPage {
  session: any;
  isFavorite = false;
  defaultHref = '';
  shift: Shift;
  shiftID: number;
  volunteerCount: number;
  vacant: number[] = [] as number[];
  minVol: number = 4;
  shifts1: Shift[] = [{
    _ID: 1,
    name: "City Run",
    date: 'Thursday 19 March 2020',
    van: "Van 1",
    stops: [
      { location: { name: "Dickson Library", address: "Dickson Pl" }, time: "7.00pm" },
      { location: { name: "City Walk", address: "Garema Place" }, time: "8.00pm" }
    ],
    volunteers: [
      { pName: "Daniel" },
      { pName: "Kiri" },
      { pName: "Sabrina" },
      { pName: "Mardi" }
    ],
    teamLead: { pName: "Bryce" }
  },

  {
    _ID: 2,
    name: "Southern Run",
    date: 'Thursday 19 March 2020',
    van: "Van 2",
    stops: [
      { location: { name: "Queanbeyan Visitors Information Centre", address: "Farrer Pl" }, time: "7.30pm" },
      { location: { name: "Woden", address: "Corner of Bradley & Neptune St Woden" }, time: "8.15pm" }
    ],
    volunteers: [
      { pName: "Daniel" },
      { pName: "Kiri" },
      { pName: "Sabrina" },
      { pName: "Mardi" }
    ],
    teamLead: { pName: "Bryce" }
  }
  ];

  shifts2: Shift[] = [{
    _ID: 3,
    name: "City Run",
    date: 'Friday 20 March 2020',
    van: "Van 1",
    stops: [
      { location: { name: "Dickson Library", address: "Dickson Pl" }, time: "8.00pm" },
      { location: { name: "City Walk", address: "Garema Place" }, time: "9.00pm" }
    ],
    volunteers: [
      { pName: "Daniel" },
      { pName: "Sabrina" },
      { pName: "Mardi" }
    ],
    teamLead: { pName: "Kiri" }
  },

  {
    _ID: 4,
    name: "Southern Run",
    date: 'Friday 20 March 2020',
    van: "Van 2",
    stops: [
      { location: { name: "Queanbeyan Visitors Information Centre", address: "Farrer Pl" }, time: "7.30pm" },
      { location: { name: "Woden", address: "Corner of Bradley & Neptune St Woden" }, time: "8.15pm" }
    ],
    volunteers: [
      { pName: "Daniel" },
      { pName: "Kiri" },
      { pName: "Sabrina" }
    ],
    teamLead: { pName: "Bryce" }
  }
  ];


  constructor(
    private dataProvider: ConferenceData,
    private userProvider: UserData,
    private route: ActivatedRoute
  ) { }

  ionViewWillEnter() {
    this.shiftID = parseInt(this.route.snapshot.paramMap.get('shiftId'));

    if (this.shiftID == 1) {
      this.shift = this.shifts1[0];
    } else if (this.shiftID == 2) {
      this.shift = this.shifts1[1];
    } else if (this.shiftID == 3) {
      this.shift = this.shifts2[0];
    } else {
      this.shift = this.shifts2[1];
    }

    this.volunteerCount = this.shift.volunteers.length;
    var i = (4 - this.volunteerCount);
    if (i > 0) {
      while (i > 0) {
        this.vacant.push(i);
        i--;
      }
    }


    this.dataProvider.load().subscribe((data: any) => {
      if (data && data.availability && data.availability[0] && data.availability[0].groups) {
        const sessionId = this.route.snapshot.paramMap.get('sessionId');
        for (const group of data.availability[0].groups) {
          if (group && group.sessions) {
            for (const session of group.sessions) {
              if (session && session.id === sessionId) {
                this.session = session;

                this.isFavorite = this.userProvider.hasFavorite(
                  this.session.name
                );

                break;
              }
            }
          }
        }
      }
    });
  }

  optIn() {
    console.log('lol... opted in')
    this.userProvider.getUsername().then((username) => {
      var user: User = { pName: username }
      this.shift.volunteers.push(user);
    });
    this.vacant.splice(this.vacant.length - 1);
  }

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/shift`;
  }

  sessionClick(item: string) {
    console.log('Clicked', item);
  }

  toggleFavorite() {
    if (this.userProvider.hasFavorite(this.session.name)) {
      this.userProvider.removeFavorite(this.session.name);
      this.isFavorite = false;
    } else {
      this.userProvider.addFavorite(this.session.name);
      this.isFavorite = true;
    }
  }

  shareSession() {
    console.log('Clicked share session');
  }
}
