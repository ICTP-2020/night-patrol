import { Component, OnInit } from '@angular/core';
import { SpecialEventDetails } from '../../../interfaces/data-models';

@Component({
  selector: 'special-events-report',
  templateUrl: './special-events-report.page.html',
  styleUrls: ['./special-events-report.page.scss'],
})
export class SpecialEventsReportPage implements OnInit {

  event: SpecialEventDetails[]  = [{
    summary: ''
  }];

  constructor() { }

  ngOnInit() {
  }

}