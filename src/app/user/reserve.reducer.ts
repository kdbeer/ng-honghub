import { Action } from '@ngrx/store';
import { ReserveActionTypes, ReserveActions } from './reserve.actions';

export interface ReserveState {
  open_modal: boolean;
  form: any;
  available: any[];
}

export const initialState: ReserveState = {
  open_modal: false,
  form: undefined,
  available: undefined
};

export function reducer(
  state = initialState,
  action: ReserveActions
): ReserveState {
  switch (action.type) {
    case ReserveActionTypes.OpenSearchModal:
      return { ...state, open_modal: true };
    case ReserveActionTypes.CloseSearchModal:
      return { ...state, open_modal: false };
    case ReserveActionTypes.ConfirmSearchAvailable:
      return { ...state, open_modal: false };
    case ReserveActionTypes.SearchAvailableFailed:
      return { ...state, open_modal: false };
    case ReserveActionTypes.SearchAvailableSuccess:
      return {
        ...state,
        open_modal: false,
        available: action.payload.available
      };
    default:
      return state;
  }
}
