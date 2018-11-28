import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import {
  AuthActionTypes,
  LoginAction,
  LoginFailed,
  LoginSuccess,
  LogoutAction
} from './auth.actions';
import { tap, mergeMap, map, retry } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { defer } from 'rxjs/internal/observable/defer';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  @Effect()
  submitLogin$ = this.actions$.pipe(
    ofType<LoginAction>(AuthActionTypes.LoginAction),
    map(action => action.payload),
    mergeMap(payload => {
      return this.as.login(payload);
    }),
    map(res => {
      if (res.message_code !== '00') {
        return new LoginFailed();
      }
      console.log(res);
      return new LoginSuccess({ user: res.data });
    })
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType<LoginSuccess>(AuthActionTypes.LoginSuccess),
    tap(action => {
      console.log('User', action.payload);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    })
  );

  @Effect()
  init$ = defer(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      return of(new LoginSuccess({ user: null }));
    } else {
      return <any>of(new LogoutAction());
    }
  });

  constructor(private actions$: Actions, private as: AuthService) {}
}
