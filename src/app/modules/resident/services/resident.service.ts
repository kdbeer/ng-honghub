import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from 'app/modules/main/models/http-interface';
import { environment } from 'environments/environment';
import { api } from 'environments/api';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {
  constructor(private http: HttpClient) {}

  registerResident(json) {
    return this.http.post<IResponse>(
      environment.url + api.register_resident,
      json
    );
  }
}
