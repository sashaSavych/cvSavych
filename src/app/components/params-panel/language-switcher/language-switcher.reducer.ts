import { Reducer } from 'redux';
import { AppState } from '../../../app.state';
import { LanguageAction } from './language-switcher.model';

const initialState: AppState = { language: 'en' };

export const CounterReducer: Reducer<AppState> =
  (state: AppState = initialState, action: LanguageAction): AppState => {
    switch (action.type) {
      case 'LANGUAGE':
        return Object.assign({}, state, { language: action.value });
      default:
        return state;
    }
  };
