import { Headers } from '@angular/http';

export interface APIInterface {
  ADD_ROOM: string;
}

export const jsonHeader = new Headers({
  Accept: 'application/json'
});
