import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  IResponse,
  IResponseWithTotal
} from 'app/modules/main/models/http-interface';
import { environment } from 'environments/environment';
import { api } from 'environments/api';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {
  constructor(private http: HttpClient) {}

  registerResident(json) {
    return this.http.post<IResponse>(
      environment.url + api.REGISTER_RESIDENT,
      json
    );
  }

  listResident(json) {
    return this.http.post<IResponseWithTotal>(
      environment.url + api.LIST_RESIDENT,
      json
    );
  }
}
