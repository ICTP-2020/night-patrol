import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NightShiftReferrals, NightShiftServingDetails, NightShiftDonations } from '../../../../interfaces/data-models';


@Component({
  selector: 'night-patrol-information-referrals',
  templateUrl: './night-patrol-information-referrals.page.html',
  styleUrls: ['./night-patrol-information-referrals.page.scss'],
})
export class NightPatrolInformationReferralsPage implements OnInit {
  referrals: NightShiftReferrals;

  ref: NightShiftReferrals[] = [{
    information:'',
    referral: ''
  }
  ];
  donation: NightShiftDonations[] = [{
    donationType:'Material',
    materialDonation:''
 
  },

  {
    donationType:'Financial',
    financialDonation:0 
  }
  ];
 

  constructor(
    public router: Router

  ) { }

  ngOnInit() {
  }

  onNext() {
    this.router.navigateByUrl('night-patrol-shift-wrap-up');
  }

  onPrevious() {
    this.router.navigateByUrl('/night-patrol-material-aid');
  }
}
