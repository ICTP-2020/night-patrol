import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-shift-detail',
  templateUrl: 'shift-detail.html',
  styleUrls: ['./shift-detail.scss'],
})
export class ShiftDetailPage {
  shift: any;

  constructor(
    private dataProvider: ConferenceData,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      const shiftId = this.route.snapshot.paramMap.get('shiftId');
      if (data && data.shifts) {
        for (const shift of data.shifts) {
          if (shift && shift.id === shiftId) {
            this.shift = shift;
            break;
          }
        }
      }
    });
  }
}
