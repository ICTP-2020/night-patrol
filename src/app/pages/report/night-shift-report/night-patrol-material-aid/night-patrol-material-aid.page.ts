import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'night-patrol-material-aid',
  templateUrl: './night-patrol-material-aid.page.html',
  styleUrls: ['./night-patrol-material-aid.page.scss'],
})
export class NightPatrolMaterialAidPage implements OnInit {
   radio;
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  onCheckedYes(){
    this.radio = true;
    
  }

  onCheckedNo(){
    this.radio = false;
  }

  onNext() {
 if(this.radio === false){
    this.router.navigateByUrl('/night-patrol-information-referrals');
  }
 else{
  this.router.navigateByUrl('/night-patrol-stop-details');
 } 
  }

  onPrevious() {
    this.router.navigateByUrl('/night-patrol-stop-details');
  }

  
}
