import { ResidentState } from './resident.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const residentState = createFeatureSelector<ResidentState>('resident');

export const selectBuilding = createSelector(
  residentState,
  state => {
    if (!state) {
      return [];
    }

    return state.building;
  }
);
