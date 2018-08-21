import { Component, OnInit } from '@angular/core';
import {ADDITIONAL_INFORMATION, CONTACTS, INTERESTS, TESTIMONIALS} from './about.config';

@Component({
  selector: 'cv-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  readonly contacts = CONTACTS;
  readonly testimonials = TESTIMONIALS;
  readonly additionalInformationItems = ADDITIONAL_INFORMATION;
  readonly interests = INTERESTS;

  constructor() {  }

  ngOnInit() {  }

}
