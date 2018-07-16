import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  advisers: any[];

  interests: {iconName: string; label: string}[] = [
    {
      iconName: 'suitcase',
      label: 'Traveling'
    },
    {
      iconName: 'gamepad',
      label: 'Technologies'
    },
    {
      iconName: 'puzzle-piece',
      label: 'Boardgames'
    },
    {
      iconName: 'futbol-o',
      label: 'Sport'
    }
  ];

  constructor() {
    this.advisers = Array(3);
  }

  ngOnInit() {  }

}
