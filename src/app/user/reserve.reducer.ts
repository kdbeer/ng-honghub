import { Action } from '@ngrx/store';
import { ReserveActionTypes, ReserveActions } from './reserve.actions';

export interface ReserveState {
  open_modal: boolean;
  confirm_reserve_modal: boolean;
  form: any;
  available: any[];
}

export const initialState: ReserveState = {
  open_modal: false,
  confirm_reserve_modal: false,
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
    case ReserveActionTypes.ReserveRequested:
      return { ...state, confirm_reserve_modal: true };
    case ReserveActionTypes.ReserveConfirm:
      return { ...state, confirm_reserve_modal: false };
    default:
      return state;
  }
}
