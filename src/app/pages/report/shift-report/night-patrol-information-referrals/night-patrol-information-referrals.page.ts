import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'night-patrol-information-referrals',
  templateUrl: './night-patrol-information-referrals.page.html',
  styleUrls: ['./night-patrol-information-referrals.page.scss'],
})
export class NightPatrolInformationReferralsPage implements OnInit {

  constructor(
    public router: Router

  ) { }

  ngOnInit() {
  }

  onNext() {
    this.router.navigateByUrl('/night-patrol-shift-wrap-up');
  }

  onPrevious() {
    this.router.navigateByUrl('/night-patrol-material-aid');
  }
}
