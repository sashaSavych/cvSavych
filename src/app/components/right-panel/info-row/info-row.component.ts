import {Component, Input, OnInit} from '@angular/core';

interface IInfoRow {
  label: string;
  value: string;
}

@Component({
  selector: 'cv-info-row',
  templateUrl: './info-row.component.html',
  styleUrls: ['./info-row.component.scss']
})
export class InfoRowComponent {
  @Input() data: IInfoRow;

  constructor() { }
}
