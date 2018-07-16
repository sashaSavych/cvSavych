import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cv-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {
  @Input() iconName = '';
  @Input() value = '';

  constructor() { }

  ngOnInit() {
  }

}
