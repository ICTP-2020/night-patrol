import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShiftReportAid } from '../../../../interfaces/shift-report-aid';

@Component({
  selector: 'night-patrol-material-aid',
  templateUrl: './night-patrol-material-aid.page.html',
  styleUrls: ['./night-patrol-material-aid.page.scss'],
})
export class NightPatrolMaterialAidPage implements OnInit {
  aid: ShiftReportAid = { jackets: 0, blankets: 0, socks: 0, hygiene: 0, sleeping: 0, beanies: 0, gloves: 0, scarves: 0, other: '' };

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  onNext() {
 
    this.router.navigateByUrl('/night-patrol-information-referrals');
  }

  onPrevious() {
    this.router.navigateByUrl('/night-patrol-stop-details');
  }
}
