import { Component, OnInit } from '@angular/core';
import {
  CalendarComponentOptions} from 'ion2-calendar';

@Component({
  selector: 'page-availability',
  templateUrl: 'availability.html',
  styleUrls: ['./availability.scss'],
})
export class AvailabilityPage implements OnInit {
  dateMulti: string[];
  type: 'string';
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  };
  constructor() { }
  ngOnInit(){} 
  button(){
    console.log(this.dateMulti);
  }
}