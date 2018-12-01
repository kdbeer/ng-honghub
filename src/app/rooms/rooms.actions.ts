import { Action } from '@ngrx/store';

export enum RoomsActionTypes {
  LoadRooms = '[Rooms] Load Rooms',
  AddRoomOpen = '[Rooms] Add Room Open',
  AddRoomClose = '[Rooms] Load Room Close',
  AddRoomConfirm = '[Rooms] Add Room Confirm',
  AddRoomSuccess = '[Rooms] Load Room Success',
  AddRoomFailed = '[Rooms] Load Room Failed'
}

export class LoadRooms implements Action {
  readonly type = RoomsActionTypes.LoadRooms;
}

export class AddRoomOpen implements Action {
  readonly type = RoomsActionTypes.AddRoomOpen;
}

export class AddRoomClose implements Action {
  readonly type = RoomsActionTypes.AddRoomClose;
}

export class AddRoomConfirm implements Action {
  readonly type = RoomsActionTypes.AddRoomConfirm;
  constructor(public payload: { newRoom: any }) {}
}

export class AddRoomSuccess implements Action {
  readonly type = RoomsActionTypes.AddRoomSuccess;
  constructor(public payload: { rooms: any }) {}
}

export class AddRoomFailed implements Action {
  readonly type = RoomsActionTypes.AddRoomFailed;
  constructor(public payload: { messageDescription: string }) {}
}

export type RoomsActions =
  | LoadRooms
  | AddRoomOpen
  | AddRoomClose
  | AddRoomConfirm
  | AddRoomSuccess
  | AddRoomFailed;
