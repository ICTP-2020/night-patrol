import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'shift-report',
  templateUrl: './shift-report.page.html',
  styleUrls: ['./shift-report.page.scss'],
})
export class ShiftReportPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  onNext() {
    this.router.navigateByUrl('/night-patrol-team-details');
  }

}
