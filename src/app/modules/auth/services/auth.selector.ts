import { createSelector } from '@ngrx/store';

export const authState = state => state.auth;

export const isLoggedIn = createSelector(
  authState,
  auth => auth.loggedIn
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);
