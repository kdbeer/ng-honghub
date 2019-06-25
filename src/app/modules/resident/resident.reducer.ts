import { Action } from '@ngrx/store';
import { ResidentActions, ResidentActionTypes } from './resident.actions';

export interface ResidentState {}

export const initialState: ResidentState = {};

export function reducer(state = initialState, action: ResidentActions): ResidentState {
  switch (action.type) {
    case ResidentActionTypes.LoadResidents:
      return state;

    default:
      return state;
  }
}
