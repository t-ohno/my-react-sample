import { combineReducers } from '@reduxjs/toolkit';
import language from 'modules/languageModule';
import counterModule from 'modules/counterModule';

const rootReducer = combineReducers({
  language,
  counter: counterModule.reducer
});

export default rootReducer;
