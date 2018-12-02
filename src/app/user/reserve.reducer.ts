import { Action } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ReserveActionTypes, ReserveActions } from './reserve.actions';
import { stat } from 'fs';

export interface AvalibleRoom {
  name: string;
  building: string;
  type: string;
  capacity: number;
}

export interface ReserveState extends EntityState<AvalibleRoom> {
  open_modal: boolean;
  confirm_reserve_modal: boolean;
  form: any;
  available: any;
}

export const adapter: EntityAdapter<AvalibleRoom> = createEntityAdapter<
  AvalibleRoom
>();

export const initialState: ReserveState = adapter.getInitialState({
  open_modal: false,
  confirm_reserve_modal: false,
  form: undefined,
  available: undefined
});

// export interface ReserveState {
//   open_modal: boolean;
//   confirm_reserve_modal: boolean;
//   form: any;
//   available: any[];
// }

// export const initialState: ReserveState = {
//   open_modal: false,
//   confirm_reserve_modal: false,
//   form: undefined,
//   available: undefined
// };

export function reducer(
  state = initialState,
  action: ReserveActions
): ReserveState {
  switch (action.type) {
    case ReserveActionTypes.OpenSearchModal:
      return { ...state, open_modal: true };
    case ReserveActionTypes.CloseSearchModal:
      return { ...state, open_modal: false, confirm_reserve_modal: false };
    case ReserveActionTypes.ConfirmSearchAvailable:
      return { ...state, open_modal: false };
    case ReserveActionTypes.SearchAvailableFailed:
      return { ...state, open_modal: false };
    case ReserveActionTypes.SearchAvailableSuccess:
      return adapter.addAll(action.payload.available, {
        ...state,
        open_modal: false
      });
    // return adapter.addAll(...state,  ) {
    //   ...state,
    //   open_modal: false,
    //   available: action.payload.available
    // };
    case ReserveActionTypes.ReserveRequested:
      return { ...state, confirm_reserve_modal: true };
    case ReserveActionTypes.ReserveConfirm:
      return { ...state, confirm_reserve_modal: false };
    case ReserveActionTypes.ConfirmReserveClosed:
      return { ...state, confirm_reserve_modal: false };
    case ReserveActionTypes.CloseReserveModal:
      return { ...state, confirm_reserve_modal: false };
    case ReserveActionTypes.ConfirmReserve:
      return { ...state, confirm_reserve_modal: false };
    default:
      return state;
  }
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();
