import { GlobalActions, GlobalActionTypes } from './global.actions';

export interface GlobalState {}

export const initialState: GlobalState = {};

export function reducer(
  state = initialState,
  action: GlobalActions
): GlobalState {
  switch (action.type) {
    case GlobalActionTypes.LoadGlobals:
      return state;

    default:
      return state;
  }
}
