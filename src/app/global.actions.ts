import { Action } from '@ngrx/store';

export enum GlobalActionTypes {
  LoadGlobals = '[Global] Load Globals',
  NoopAction = '[Global] No Op Action'
}

export class LoadGlobals implements Action {
  readonly type = GlobalActionTypes.LoadGlobals;
}
export class NoopAction implements Action {
  readonly type = GlobalActionTypes.NoopAction;
}

export type GlobalActions = LoadGlobals | NoopAction;
