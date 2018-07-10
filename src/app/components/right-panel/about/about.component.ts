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

  constructor() { }

  ngOnInit() {
    this.contactDataLocalizationKeys = {
      leftBlock: ['name', 'dateOfBirth', 'address'],
      rightBlock: ['email', 'phone', 'skype']
    };
  }

}
