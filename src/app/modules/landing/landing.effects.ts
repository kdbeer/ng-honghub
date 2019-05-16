import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LandingActionTypes } from './landing.actions';

@Injectable()
export class LandingEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(LandingActionTypes.LoadLandings));

  constructor(private actions$: Actions) {}
}
