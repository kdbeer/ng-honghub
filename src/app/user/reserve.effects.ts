import { tap, map, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  SearchAvailableSuccess,
  ReserveActionTypes,
  ConfirmSearchAvailable,
  SearchAvailableFailed
} from './reserve.actions';
import { Router } from '@angular/router';
import { RoomsService } from 'app/rooms/services/rooms.service';
import { IResponse } from 'app/rooms';

@Injectable()
export class ReserveEffects {
  @Effect({ dispatch: false })
  searcCompleted$ = this.actions$.pipe(
    ofType<SearchAvailableSuccess>(ReserveActionTypes.SearchAvailableSuccess),
    map(() => {
      this.router.navigateByUrl('users/reserve-able');
    })
  );

  @Effect()
  searchAvailable$ = this.actions$.pipe(
    ofType<ConfirmSearchAvailable>(ReserveActionTypes.ConfirmSearchAvailable),
    map(action => action.payload),
    mergeMap(payload => {
      return this.room.getRooms(payload.json);
    }),
    map(res => {
      const json: IResponse = res.json();
      if (json.messageCode !== '00') {
        return new SearchAvailableFailed({ message: json.messageDescription });
      }
      return new SearchAvailableSuccess({ available: json.data });
    })
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private room: RoomsService
  ) {}
}
