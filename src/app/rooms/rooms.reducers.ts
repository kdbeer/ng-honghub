import { RoomsActions, RoomsActionTypes } from './rooms.actions';
import { RoomsState } from './rooms.reducers';
import { Room } from '.';

// tslint:disable-next-line:no-empty-interface
export interface RoomsState {
  room: Room;
  add_room: boolean;
}

const initialState: RoomsState = {
  room: undefined,
  add_room: false
};

export function reducer(
  state = initialState,
  action: RoomsActions
): RoomsState {
  switch (action.type) {
    case RoomsActionTypes.AddRoomOpen:
      return { ...state, add_room: true };
    case RoomsActionTypes.AddRoomClose:
      return { ...state, add_room: false };
    default:
      return state;
  }
}
