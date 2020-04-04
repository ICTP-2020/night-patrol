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
    aidType:'Jackets',
    aidAmount:0

  },

  {
    aidType:'Blankets',
    aidAmount:0 
  }
  ,

  {
    aidType:'Socks',
    aidAmount:0 
  }
  ,

  {
    aidType:'Hygiene packs',
    aidAmount:0 
  },

  {
    aidType:'Beanies',
    aidAmount:0 
  },

  {
    aidType:'Gloves',
    aidAmount:0 
  },
  {
    aidType:'Scarves',
    aidAmount:0 
  },

  {
    aidType:'Other',
    aidAmount:0 
  },
  ];

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
