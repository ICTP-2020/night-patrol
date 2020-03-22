import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'night-patrol-shift-wrap-up',
  templateUrl: './night-patrol-shift-wrap-up.page.html',
  styleUrls: ['./night-patrol-shift-wrap-up.page.scss'],
})
export class NightPatrolShiftWrapUpPage implements OnInit {


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
