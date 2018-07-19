import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cv-period-item',
  templateUrl: './period-item.component.html',
  styleUrls: ['./period-item.component.scss']
})
export class PeriodItemComponent implements OnInit {
  @Input()
  from: string;
  @Input()
  to: string;

  constructor() { }

  ngOnInit() {
  }

}
