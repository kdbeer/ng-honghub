import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { jsonHeader } from 'environments/api';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  private _env = environment;

  constructor(private http: Http) {}

  addNewRoom(json) {
    return this.http.post(this._env.API_URL + this._env.APIS.ADD_ROOM, json, {
      headers: jsonHeader
    });
  }
}
