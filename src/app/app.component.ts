import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from './auth/auth.service';
declare var google: any;

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  slideValue = 100;
  root = document.querySelector(':root');
  overlays: any[];

  constructor(private translateService: TranslateService,
              public authService: AuthService) {
    // translateService.setDefaultLang('en');
    // authService.handleAuthentication();
  }

  ngOnInit() {
    this.initOverlays();
  }

  setLanguage(newLang: string): void {
    this.translateService.use(newLang);
  }

  onFontSizeChanged(newValue: number): void {
    newValue /= 10;
    console.log(newValue);
    console.log(this.root);
    this.root['style'].setProperty('--font-size', newValue + 'px');
    // root.style.setProperty('--line-height', newValue + 'px');
  }

  initOverlays() {
    // this.overlays = [new google.maps.Marker({position: {lat: 50.4501, lng: 30.5234}, title: 'Hometown'})];
  }

  onActivate(e, scrollContainer) {
    scrollContainer.scrollTop = 0;
  }
}
