import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  slideValue = 100;
  root = document.querySelector(':root');

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
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

}
