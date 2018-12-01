import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RoomsState } from './rooms.reducers';

export const roomState = createFeatureSelector<RoomsState>('rooms');

export const createRoomOpen = createSelector(
  roomState,
  room => {
    console.log(room.add_room);
    return room.add_room;
  }
);
