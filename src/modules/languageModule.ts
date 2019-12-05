import { produce } from 'immer';
import { Action, AppState } from 'app/types';
import { LanguageActionTypes } from 'app/actionTypes';

const initialState: AppState = {
  language: 'en'
};

const languageModule = (state: AppState = initialState, action: Action): AppState =>
  produce(state, () => {
    switch (action.type) {
      case LanguageActionTypes.SET: {
        return action.payload;
      }
    }
  });

export default languageModule;
