import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cv-testimonial-item',
  templateUrl: './testimonial-item.component.html',
  styleUrls: ['./testimonial-item.component.scss']
})
export class TestimonialItemComponent implements OnInit {
  @Input() personKey = '';

  constructor() { }

  ngOnInit() {
  }

}
