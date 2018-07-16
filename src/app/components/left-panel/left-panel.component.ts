import { Component, OnInit } from '@angular/core';
import {GLOBALS} from '../../../assets/globals';

@Component({
  selector: 'cv-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openSocial(socialName: string): void {
    window.open(GLOBALS.social[socialName], '_blank');
  }

}
