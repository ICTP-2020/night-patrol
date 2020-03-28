import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NightShiftServingDetails } from '../../../interfaces/data-models';

@Component({
  selector: 'shift-report',
  templateUrl: './shift-report.page.html',
  styleUrls: ['./shift-report.page.scss'],
})
export class ShiftReportPage implements OnInit {

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
  ,

  {
    serveType:'Hot food',
    serveAmount:0 
  },

  {
    serveType:'Sandwiches',
    serveAmount:0 
  },

  {
    serveType:'Coffee',
    serveAmount:0 
  }
  ];
  ngOnInit() {
  }

  onNext() {
    this.router.navigateByUrl('/night-patrol-stop-details');
  }

}
