import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  ResidentActionTypes,
  RegisterResidentRequest,
  RegisterResidentSuccess
} from './resident.actions';
import { map } from 'rxjs/internal/operators/map';
import { mergeMap } from 'rxjs/operators';
import { ResidentService } from './services/resident.service';
import { Router } from '@angular/router';
import { NoopAction } from 'app/global.actions';

@Injectable()
export class ResidentEffects {
  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(ResidentActionTypes.LoadResidents));

  @Effect()
  registerResidentRequest$ = this.actions$.pipe(
    ofType<RegisterResidentRequest>(
      ResidentActionTypes.RegisterResidentRequest
    ),
    mergeMap(action => this.rs.registerResident(action.payload.json)),
    map(res => {
      if (res.messageCode !== '00') {
        return new NoopAction();
      }
      return new RegisterResidentSuccess({ json: {} });
    })
  );

  @Effect({ dispatch: false })
  registerResidentSuccess$ = this.actions$.pipe(
    ofType<RegisterResidentSuccess>(
      ResidentActionTypes.RegisterResidentSuccess
    ),
    map(json => {
      this.router.navigateByUrl('resident/management');
    })
  );

  constructor(
    private actions$: Actions,
    private rs: ResidentService,
    private router: Router
  ) {}
}
