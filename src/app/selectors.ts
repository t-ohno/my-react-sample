import { createSelector } from 'reselect';
import { AppState, Language } from './types';

export const getLanguage = createSelector(
  (state: AppState) => state,
  (app): Language => app.language
);
