import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {  }

  ngOnInit() {  }

  onActivate(e, scrollContainer) {
    scrollContainer.scrollTop = 0;
  }
}
