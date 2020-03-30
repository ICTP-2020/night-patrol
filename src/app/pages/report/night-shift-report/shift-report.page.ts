import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NightShiftServingDetails, NightShiftMaterialAid } from '../../../interfaces/data-models';

@Component({
  selector: 'shift-report',
  templateUrl: './shift-report.page.html',
  styleUrls: ['./shift-report.page.scss'],
})
export class ShiftReportPage implements OnInit {
  servingsGiven: number;
  aidGiven: number;

  constructor(
    public router: Router
  ) { }

  serves: NightShiftServingDetails[] = [{
    serveType:'Male',
    serveAmount:0

  },

  {
    serveType:'Female',
    serveAmount:0 
  }
  ,

  {
    serveType:'Under 18',
    serveAmount:0 
  }
  ];

  aid: NightShiftMaterialAid[] = [{
    aidType:'Male',
    aidAmount:0

  },

  {
    aidType:'Female',
    aidAmount:0 
  }
  ,

  {
    aidType:'Under 18',
    aidAmount:0 
  }
  ,

  {
    aidType:'Hot food',
    aidAmount:0 
  },

  {
    aidType:'Sandwiches',
    aidAmount:0 
  },

  {
    aidType:'Coffee',
    aidAmount:0 
  },
  {
    aidType:'Hot food',
    aidAmount:0 
  },

  {
    aidType:'Sandwiches',
    aidAmount:0 
  },

  {
    aidType:'Coffee',
    aidAmount:0 
  },
  {
    aidType:'Hot food',
    aidAmount:0 
  },

  {
    aidType:'Sandwiches',
    aidAmount:0 
  },

  {
    aidType:'Coffee',
    aidAmount:0 
  }
  ];

  ngOnInit() {
  }

  onNext() {
    this.router.navigateByUrl('/night-patrol-stop-details');
  }

}
