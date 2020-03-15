import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'night-patrol-material-aid',
  templateUrl: './night-patrol-material-aid.page.html',
  styleUrls: ['./night-patrol-material-aid.page.scss'],
})
export class NightPatrolMaterialAidPage implements OnInit {

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
