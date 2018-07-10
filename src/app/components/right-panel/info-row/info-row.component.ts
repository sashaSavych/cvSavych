import {Component, Input} from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'cv-info-row',
  templateUrl: './info-row.component.html',
  styleUrls: ['./info-row.component.scss']
})
export class InfoRowComponent {
  @Input() data: SelectItem;

  constructor() { }
}
