import { Language } from 'app/types';
import { LanguageActionTypes } from 'app/actionTypes';

export const setLanguage = (language: Language) => ({
  type: LanguageActionTypes.SET,
  payload: language
});
