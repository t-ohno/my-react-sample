import { createSelector } from 'reselect';
import { AppState } from 'app/types';

export const getLanguage = createSelector(
  (state: AppState) => state,
  (app: AppState) => app.language
);
