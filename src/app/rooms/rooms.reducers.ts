import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

// tslint:disable-next-line:no-empty-interface
export interface RoomsState {}

export const reducers: ActionReducerMap<RoomsState> = {};

export const metaReducers: MetaReducer<RoomsState>[] = !environment.production
  ? []
  : [];
