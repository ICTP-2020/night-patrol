import { Component, OnInit } from '@angular/core';
import { ShiftReportWrapUp } from '../../../../interfaces/shift-report-wrap-up';
import { Router } from '@angular/router';

@Component({
  selector: 'night-patrol-shift-wrap-up',
  templateUrl: './night-patrol-shift-wrap-up.page.html',
  styleUrls: ['./night-patrol-shift-wrap-up.page.scss'],
})
export class NightPatrolShiftWrapUpPage implements OnInit {
  wrapup: ShiftReportWrapUp = { whs: '', fridge: '', feedback: '' };


  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  onPrevious() {
    this.router.navigateByUrl('/night-patrol-information-referrals');
  }
}
