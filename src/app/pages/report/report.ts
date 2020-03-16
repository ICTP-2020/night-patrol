import { Component, ElementRef, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { Platform } from '@ionic/angular';
import { DOCUMENT} from '@angular/common';

import { darkStyle } from './report-dark-style';

@Component({
  templateUrl: 'report.html',
  styleUrls: ['./report.scss']
})
export class MapPage implements AfterViewInit {
  
  constructor(
    @Inject(DOCUMENT) private doc: Document,
    public confData: ConferenceData,
    public platform: Platform) {}

  async ngAfterViewInit() {
    const appEl = this.doc.querySelector('ion-app');
    let isDark = false;
    let style = [];
    if (appEl.classList.contains('dark-theme')) {
      style = darkStyle;
    }


  }

}

