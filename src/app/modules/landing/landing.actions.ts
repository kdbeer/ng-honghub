import { Action } from '@ngrx/store';

export enum LandingActionTypes {
  LoadLandings = '[Landing] Load Landings'
}

export class LoadLandings implements Action {
  readonly type = LandingActionTypes.LoadLandings;
}

export type LandingActions = LoadLandings;
