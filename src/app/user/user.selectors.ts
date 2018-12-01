import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ReserveState } from './reserve.reducer';

export const reserveState = createFeatureSelector<ReserveState>('reserveState');

export const selectReserveModalOpen = createSelector(
  reserveState,
  reserve => {
    return reserve.open_modal;
  }
);
