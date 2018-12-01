import { Action } from '@ngrx/store';

export enum RoomsActionTypes {
  LoadRoomss = '[Rooms] Load Roomss'
}

export class LoadRoomss implements Action {
  readonly type = RoomsActionTypes.LoadRoomss;
}

export type RoomsActions = LoadRoomss;
