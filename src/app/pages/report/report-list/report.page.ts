import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToForm(){
    this.router.navigateByUrl('/night-patrol-shift-wrap-up');
  }
}
