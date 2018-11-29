import { AuthActions, AuthActionTypes } from './auth.actions';
import { User } from '.';

export interface AuthState {
  loggedIn: boolean;
  user: User;
}

export const initialState: AuthState = { loggedIn: false, user: undefined };

export function reducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LogoutAction:
      return initialState;
    case AuthActionTypes.LoginSuccess:
      return { ...state, user: action.payload.user, loggedIn: true };

    default:
      return state;
  }
}
