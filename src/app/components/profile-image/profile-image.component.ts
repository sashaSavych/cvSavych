import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent implements OnInit {
  profileImages = ['profile', 'profile2', 'profile3'];
  currentImage = this.profileImages[0];

  constructor() { }

  ngOnInit() {
    let changesAmount = 0,
      currentImageIndex = 0;
    const maxChangesAmount = this.profileImages.length * 3;
    const changeImageInterval = setInterval(() => {
      currentImageIndex = Math.floor(Math.random() * this.profileImages.length);
      this.currentImage = this.profileImages[currentImageIndex];
      if (++changesAmount === maxChangesAmount) {
        clearInterval(changeImageInterval);
      }
    }, 10000);
  }

}
