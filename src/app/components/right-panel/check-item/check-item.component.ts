import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cv-check-item',
  templateUrl: './check-item.component.html',
  styleUrls: ['./check-item.component.scss']
})
export class CheckItemComponent implements OnInit {
  @Input() value = '';
  @Input() positive = true;

  constructor() { }

  ngOnInit() {
  }

}
