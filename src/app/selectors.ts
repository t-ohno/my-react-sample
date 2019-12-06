import { createSelector } from 'reselect';
import { AppState } from './types';

export const getLanguage = createSelector(
  (state: AppState) => state,
  (app: AppState) => app.language
);
