import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GlobalActionTypes } from './global.actions';

@Injectable()
export class GlobalEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(GlobalActionTypes.LoadGlobals));

  constructor(private actions$: Actions) {}
}
