import { tap, map, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  SearchAvailableSuccess,
  ReserveActionTypes,
  ConfirmSearchAvailable,
  SearchAvailableFailed,
  BackToHome,
  ConfirmReserve
} from './reserve.actions';
import { Router } from '@angular/router';
import { RoomsService } from 'app/rooms/services/rooms.service';
import { IResponse } from 'app/rooms';
import { ToastService } from 'app/toast/service/toast.service';

@Injectable()
export class ReserveEffects {
  @Effect({ dispatch: false })
  searcCompleted$ = this.actions$.pipe(
    ofType<SearchAvailableSuccess>(ReserveActionTypes.SearchAvailableSuccess),
    map(() => {
      this.router.navigateByUrl('users/reserve-able');
    })
  );

  @Effect({ dispatch: false })
  backToHome$ = this.actions$.pipe(
    ofType<BackToHome>(ReserveActionTypes.BackToHome),
    map(() => {
      this.router.navigateByUrl('users');
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
      console.log(json.data);
      return new SearchAvailableSuccess({ available: json.data });
    })
  );

  @Effect({ dispatch: false })
  confirmReserve$ = this.actions$.pipe(
    ofType<ConfirmReserve>(ReserveActionTypes.ConfirmReserve),
    map(() => {
      this.router.navigateByUrl('users');
      this.ts.showSuccessMessage('บันทึกข้อมูลสำเร็จ');
    })
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private room: RoomsService,
    private ts: ToastService
  ) {}
}
