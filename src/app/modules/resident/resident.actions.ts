import { Action } from '@ngrx/store';

export enum ResidentActionTypes {
  LoadResidents = '[Resident] Load Residents',
  RegisterResidentRequest = '[Resident] Register Resident Request',
  RegisterResidentSuccess = '[Resident] Register Resident Success',
  ListResidentRequest = '[Resident] List Resident Request',
  ListResidentSuccess = '[Resident] List Resident Success'
}

export class LoadResidents implements Action {
  readonly type = ResidentActionTypes.LoadResidents;
}

export class RegisterResidentRequest implements Action {
  readonly type = ResidentActionTypes.RegisterResidentRequest;
  constructor(public payload: { json: any }) {}
}

export class RegisterResidentSuccess implements Action {
  readonly type = ResidentActionTypes.RegisterResidentSuccess;
  constructor(public payload: { json: any }) {}
}

export class ListResidentRequest implements Action {
  readonly type = ResidentActionTypes.ListResidentRequest;
  constructor(public payload: { json: any }) {}
}

export class ListResidentSuccess implements Action {
  readonly type = ResidentActionTypes.ListResidentSuccess;
  constructor(public payload: { data: any; total: number }) {}
}

export type ResidentActions =
  | LoadResidents
  | RegisterResidentRequest
  | RegisterResidentSuccess
  | ListResidentRequest
  | ListResidentSuccess;
