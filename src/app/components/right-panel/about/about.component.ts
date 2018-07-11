import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  contactDataLocalizationKeys: {
    leftBlock: string[];
    rightBlock: string[];
  };

  advisers: any[];

  interests: {iconName: string; label: string}[] = [
    {
      iconName: 'suitcase',
      label: 'Traveling'
    },
    {
      iconName: 'gamepad',
      label: 'Technologies'
    },
    {
      iconName: 'puzzle-piece',
      label: 'Boardgames'
    },
    {
      iconName: 'futbol-o',
      label: 'Sport'
    }
  ];

  constructor() {
    this.advisers = Array(3);
  }

  ngOnInit() {
    this.contactDataLocalizationKeys = {
      leftBlock: ['name', 'dateOfBirth', 'address'],
      rightBlock: ['email', 'phone', 'skype']
    };
  }

}
