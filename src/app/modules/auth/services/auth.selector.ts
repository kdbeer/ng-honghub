import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from '../auth.reducer';

export const authState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
  authState,
  state => state.loggedIn
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);
