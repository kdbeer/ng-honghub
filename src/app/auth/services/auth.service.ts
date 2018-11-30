import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '..';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  login(json): Observable<any> {
    console.log('Login was called');
    console.log(json);

    const user: User = {
      first_name: 'firstname',
      last_name: 'lastname',
      role: 'user',
      username: json.username
    };
    return of({ message_code: '00', message_description: '', data: user }); // TODO: implement api here
  }
}
