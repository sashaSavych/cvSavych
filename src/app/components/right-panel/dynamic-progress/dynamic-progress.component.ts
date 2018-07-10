import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cv-dynamic-progress',
  templateUrl: './dynamic-progress.component.html',
  styleUrls: ['./dynamic-progress.component.scss']
})
export class DynamicProgressComponent implements OnInit {
  @Input()
  label = '';
  @Input()
  maxValue = 0;
  value = 0;

  constructor() { }

  ngOnInit() {
    const interval = setInterval(() => {
      this.value += Math.floor(Math.random() * 10) + 1;
      if (this.value >= this.maxValue) {
        this.value = this.maxValue;
        clearInterval(interval);
      }
    }, 100);
  }

}
