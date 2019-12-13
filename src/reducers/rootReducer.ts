import { combineReducers } from '@reduxjs/toolkit';
import languageModule from 'modules/languageModule';
import counterModule from 'modules/counterModule';

const rootReducer = combineReducers({
  language: languageModule,
  counter: counterModule.reducer
});

export default rootReducer;
