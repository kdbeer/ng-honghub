import { Action } from '@ngrx/store';
import { ResidentActions, ResidentActionTypes } from './resident.actions';

export interface ResidentState {
  building: any[];
}

export const initialState: ResidentState = {
  building: []
};

export function reducer(
  state = initialState,
  action: ResidentActions
): ResidentState {
  switch (action.type) {
    case ResidentActionTypes.LoadResidents:
      return state;
    case ResidentActionTypes.ListResidentSuccess:
      return { ...state, building: action.payload.data };
    default:
      return state;
  }
}
