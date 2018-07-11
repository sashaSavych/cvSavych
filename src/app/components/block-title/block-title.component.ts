import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cv-block-title',
  templateUrl: './block-title.component.html',
  styleUrls: ['./block-title.component.scss']
})
export class BlockTitleComponent implements OnInit {
  @Input()
  iconName = '';
  iconClass = '';

  @Input()
  title = '';

  constructor() { }

  ngOnInit() {
    if (this.iconName) {
      this.iconClass = `fa fa-${this.iconName}`;
    }
  }

}
