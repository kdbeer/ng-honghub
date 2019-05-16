import { Action } from '@ngrx/store';
import { LandingActions, LandingActionTypes } from './landing.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: LandingActions): State {
  switch (action.type) {

    case LandingActionTypes.LoadLandings:
      return state;


    default:
      return state;
  }
}
