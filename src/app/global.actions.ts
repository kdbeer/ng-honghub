import { Action } from '@ngrx/store';

export enum GlobalActionTypes {
  LoadGlobals = '[Global] Load Globals'
}

export class LoadGlobals implements Action {
  readonly type = GlobalActionTypes.LoadGlobals;
}

export type GlobalActions = LoadGlobals;
