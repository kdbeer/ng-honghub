import { Headers } from '@angular/http';

export interface APIInterface {
  ADD_ROOM: string;
  GET_ROOM_LIST: string;
}

export const jsonHeader = new Headers({
  Accept: 'application/json'
});
