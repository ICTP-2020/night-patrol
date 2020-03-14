import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'night-patrol-team-details',
  templateUrl: './night-patrol-team-details.page.html',
  styleUrls: ['./night-patrol-team-details.page.scss'],
})
export class NightPatrolTeamDetailsPage implements OnInit {

  constructor(
    public router: Router

  ) { }

  ngOnInit() {
  }

  onNext() {
    this.router.navigateByUrl('/night-patrol-stop-details');
  }

}
