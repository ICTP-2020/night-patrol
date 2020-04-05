import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {  NightShiftDetails } from '../../../interfaces/data-models';

@Component({
  selector: 'shift-report',
  templateUrl: './shift-report.page.html',
  styleUrls: ['./shift-report.page.scss'],
})
export class ShiftReportPage implements OnInit {
  servingsGiven: number;
  aidGiven: number;
  nightShift: NightShiftDetails;
  constructor(
    public router: Router
  ) { }
  nightShifts: NightShiftDetails[] = [{
    servingsProvided: [
      { serveType:"Male", serveAmount:0  },
      { serveType:"Under 18", serveAmount:0  },
      { serveType:"Under 18", serveAmount:0  }
      
    ],
    aidProvided: [
      { aidType:"Male", aidAmount:0  },
      { aidType:"Under 18", aidAmount:0  },
      { aidType:"Under 18", aidAmount:0  }
    ],

  }];

  ngOnInit() {
  }

  onNext() {
    this.router.navigateByUrl('/night-patrol-stop-details');
  }

  onIncrement() {
   
  }

  onDecrement() {
    this.router.navigateByUrl('/night-patrol-stop-details');
  }

}
