import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ModelAuth } from './login.model';
import { AppState } from 'app/state';
import { LoginLoading } from '../../auth.actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  _loading = false;
  _auth = ModelAuth;

  ngOnInit() {
    this._auth = ModelAuth;
    this.store.subscribe(state => {
      console.log(state);
      this._loading = state['auth']['loading'];
    });
  }

  login() {
    console.log('test ', this._auth.value);
    this.store.dispatch(
      new LoginLoading({
        loading: true,
        username: this._auth.value['username'],
        password: this._auth.value['password']
      })
    );
  }

  Checkloading() {
    return this._loading ? 'is-loading' : '';
  }

  get username() {
    return this._auth.get('username');
  }
  get password() {
    return this._auth.get('password');
  }
  constructor(private store: Store<AppState>) {}
}
