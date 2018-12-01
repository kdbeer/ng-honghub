import { Action } from '@ngrx/store';

export enum ReserveActionTypes {
  LoadReserves = '[Reserve] Load Reserves',
  OpenSearchModal = '[Reserve] Open Search Modal',
  CloseSearchModal = '[Reserve] Close Search Modal',
  ConfirmSearchAvailable = '[Reserve] Confirm Search Available',
  SearchAvailableSuccess = '[Reserve] Search Available Success',
  SearchAvailableFailed = '[Reserve] Search Available Failed',
  RoomSelected = '[Reserve] Room Selected'
}

export class LoadReserves implements Action {
  readonly type = ReserveActionTypes.LoadReserves;
}

export class OpenSearchModal implements Action {
  readonly type = ReserveActionTypes.OpenSearchModal;
}

export class CloseSearchModal implements Action {
  readonly type = ReserveActionTypes.CloseSearchModal;
}

export class ConfirmSearchAvailable implements Action {
  readonly type = ReserveActionTypes.ConfirmSearchAvailable;
  constructor(public payload: { json: any }) {}
}

export class SearchAvailableSuccess implements Action {
  readonly type = ReserveActionTypes.SearchAvailableSuccess;
  constructor(public payload: { available: any }) {}
}

export class SearchAvailableFailed implements Action {
  readonly type = ReserveActionTypes.SearchAvailableFailed;
  constructor(public payload: { message: string }) {}
}

export class RoomSelected implements Action {
  readonly type = ReserveActionTypes.RoomSelected;
  constructor(public payload: { selected: string[] }) {}
}

export type ReserveActions =
  | LoadReserves
  | OpenSearchModal
  | CloseSearchModal
  | ConfirmSearchAvailable
  | SearchAvailableSuccess
  | SearchAvailableFailed
  | RoomSelected;
