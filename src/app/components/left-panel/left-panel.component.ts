import { Component, OnInit } from '@angular/core';
import {MENU_ITEMS, SOCIAL_NETWORKS} from './left-panel.config';

@Component({
  selector: 'cv-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  readonly menuItems = MENU_ITEMS;
  readonly socialNetworks = SOCIAL_NETWORKS;


  constructor() { }

  ngOnInit() {  }

  openSocial(link: string): void {
    window.open(link, '_blank');
  }

}
