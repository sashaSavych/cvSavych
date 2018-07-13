import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv-contact',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactDataLocalizationKeys: {
    leftBlock: string[];
    rightBlock: string[];
  };

  constructor() {  }

  ngOnInit() {
    this.contactDataLocalizationKeys = {
      leftBlock: ['name', 'dateOfBirth', 'address'],
      rightBlock: ['email', 'phone', 'skype']
    };
  }
}
