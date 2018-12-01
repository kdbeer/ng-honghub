import { mergeMap, map } from 'rxjs/operators';
import { RoomsService } from './services/rooms.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  AddRoomConfirm,
  RoomsActionTypes,
  AddRoomSuccess,
  AddRoomFailed
} from './rooms.actions';
import { IResponse } from '.';

@Injectable()
export class RoomsEffects {
  @Effect()
  addRoonEffect$ = this.actions$.pipe(
    ofType<AddRoomConfirm>(RoomsActionTypes.AddRoomConfirm),
    map(action => action.payload),
    mergeMap(payload => {
      console.log(payload.newRoom);
      console.log('>>>>>>>>>>>>>>>');
      return this.room.addNewRoom(payload.newRoom);
    }),
    map(resp => {
      const json: IResponse = resp.json();
      if (json.messageCode !== '00') {
        return new AddRoomFailed({
          messageDescription: json.messageDescription
        });
      }
      return new AddRoomSuccess({ rooms: json.data });
    })
  );

  constructor(private actions$: Actions, private room: RoomsService) {}
}
