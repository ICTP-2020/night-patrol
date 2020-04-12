import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NightShiftWrapUp, SpecialEventDetails } from '../../../../interfaces/data-models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'night-patrol-shift-wrap-up',
  templateUrl: './night-patrol-shift-wrap-up.page.html',
  styleUrls: ['./night-patrol-shift-wrap-up.page.scss'],
})
export class NightPatrolShiftWrapUpPage implements OnInit {
wrapup: NightShiftWrapUp[] = [{
    fridgeTemp: '',
    rating: 0,
    summary: '',
    whs:'',
    eosChecklist:[
      {
        endShiftItem:'Van Service Area - Wipe down ',
        isChecked: false
      },
      {
        endShiftItem:'Benches and Sink - Wipe down',
        isChecked: false
      },
      {
        endShiftItem:'Food Equipment - Clean and Sanitise',
        isChecked: false
      },
      {
        endShiftItem:'Floors - Swept and mop',
        isChecked: false
      },
      {
        endShiftItem:'Fridge/Freezer - Clean and Tidy',
        isChecked: false
      },
      {
        endShiftItem:'Storage Spaces - food stored correctly and labelled',
        isChecked: false
      },
      {
        endShiftItem:'Top up ingredient containers',
        isChecked: false
      }
    ]
  }];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigateByUrl('/report');
  }
  onPrevious() {
    this.router.navigateByUrl('/night-patrol-information-referrals');
  }
}
