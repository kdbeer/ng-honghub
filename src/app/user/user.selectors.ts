import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ReserveState } from './reserve.reducer';

export const reserveState = createFeatureSelector<ReserveState>('reserveState');

export const selectReserveModalOpen = createSelector(
  reserveState,
  reserve => {
    console.log('selectReserveModalOpen');
    return reserve.open_modal;
  }
);

export const selectReserveRequestssss = createSelector(
  reserveState,
  reserve => {
    console.log('selectReserveRequest');
    return reserve.confirm_reserve_modal;
  }
);


export const selectReserveModalOpen2 = createSelector(
  reserveState,
  reserve => {
    console.log('selectReserveModalOpen');
    return reserve.confirm_reserve_modal;
  }
);
