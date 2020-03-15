import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShiftReportStopDetails } from '../../../../interfaces/shift-report-stop-details';

@Component({
  selector: 'night-patrol-stop-details',
  templateUrl: './night-patrol-stop-details.page.html',
  styleUrls: ['./night-patrol-stop-details.page.scss'],
})
export class NightPatrolStopDetailsPage implements OnInit {
  stop: ShiftReportStopDetails = { timein: '', timeout: '', male: '', female: '', under18: '' };
  
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  onNext() {
    this.router.navigateByUrl('/night-patrol-material-aid');
  }
}
