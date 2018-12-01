import { Action } from '@ngrx/store';
import { User } from '.';

export enum AuthActionTypes {
  LoadAuthState = '[Auth] Load Auth State',
  LoginAction = '[Auth] Login Action',
  LoginSuccess = '[Auth] Login Success',
  LogoutAction = '[Auth] Logout Action',
  LoginFailed = '[Auth] Login Failed',
  LoginLoading = '[Auth] Login Loading'
}

export class LoadAuthState implements Action {
  readonly type = AuthActionTypes.LoadAuthState;
}

export class LoginAction implements Action {
  readonly type = AuthActionTypes.LoginAction;
  constructor(public payload: { username: string; password: string }) {}
}

export class LogoutAction implements Action {
  readonly type = AuthActionTypes.LogoutAction;
}

export class LoginLoading implements Action {
  readonly type = AuthActionTypes.LoginLoading;
  constructor(
    public payload: { loading: true; username: string; password: string }
  ) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: { user: User }) {}
}

export class LoginFailed implements Action {
  readonly type = AuthActionTypes.LoginFailed;
}

export type AuthActions =
  | LoadAuthState
  | LoginAction
  | LogoutAction
  | LoginSuccess
  | LoginFailed;
