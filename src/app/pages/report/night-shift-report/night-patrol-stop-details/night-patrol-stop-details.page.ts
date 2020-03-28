import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NightShiftServingDetails } from '../../../../interfaces/data-models';
@Component({
  selector: 'night-patrol-stop-details',
  templateUrl: './night-patrol-stop-details.page.html',
  styleUrls: ['./night-patrol-stop-details.page.scss'],
})
export class NightPatrolStopDetailsPage implements OnInit {
  submitted = false
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

  onNext(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.router.navigateByUrl('/night-patrol-material-aid');
    }
    
  } 
  onPrevious() {
    this.router.navigateByUrl('/shift-report');
  }

  onDecrement() {
    this.router.navigateByUrl('/shift-report');
  }

  onIncrement() {
    this.router.navigateByUrl('/shift-report');
  }
}
