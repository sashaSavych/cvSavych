import { ActionCreator } from 'redux';
import { LanguageAction } from './language-switcher.model';


export const SET_UA: ActionCreator<LanguageAction> = () => ({
  type: 'LANGUAGE',
  value: 'ua'
});

export const SET_EN: ActionCreator<LanguageAction> = () => ({
  type: 'LANGUAGE',
  value: 'en'
});

export const SET_DE: ActionCreator<LanguageAction> = () => ({
  type: 'LANGUAGE',
  value: 'de'
});
