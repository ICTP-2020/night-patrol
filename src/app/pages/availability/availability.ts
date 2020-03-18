import { Component, OnInit } from '@angular/core';
import {
  CalendarComponentOptions} from 'ion2-calendar';

@Component({
  selector: 'page-availability',
  templateUrl: 'availability.html',
  styleUrls: ['./availability.scss'],
})
export class AvailabilityPage implements OnInit {
  dateMulti: string[] = ["2020-03-03T13:00:00.000Z","2020-03-18T13:00:00.000Z","2020-03-23T13:00:00.000Z","2020-03-25T13:00:00.000Z"]
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