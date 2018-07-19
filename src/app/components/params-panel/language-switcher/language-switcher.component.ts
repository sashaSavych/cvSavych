import {Component, Inject, OnInit} from '@angular/core';
import {Store} from 'redux';
import {AppState} from '../../../app.state';
import * as LanguageActions from './language-switcher.actions';
import {AppStore} from '../../../app.store';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'cv-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {

  constructor(@Inject(AppStore) private store: Store<AppState>,
              public translateService: TranslateService) {
    store.subscribe(() => this.readState());
    this.readState();
  }

  ngOnInit() { }

  readState() {
    const state: AppState = this.store.getState() as AppState;
    this.translateService.use(state.language);
  }

  setUA() {
    this.store.dispatch(LanguageActions.SET_UA());
  }

  setEN() {
    this.store.dispatch(LanguageActions.SET_EN());
  }

  setDE() {
    this.store.dispatch(LanguageActions.SET_DE());
  }
}
