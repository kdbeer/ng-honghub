import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ModelAuth } from './login.model';
import { AppState } from 'app/state';
import { LoginLoading } from '../../auth.actions';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  _loading = false;
  auth = ModelAuth;

  form: FormGroup;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.form = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  ngOnInit() {
    this.auth = ModelAuth;
    this.store.subscribe(state => {
      console.log(state);
      this._loading = state['auth']['loading'];
    });
  }

  login() {
    this.store.dispatch(
      new LoginLoading({
        loading: true,
        username: this.auth.value['username'],
        password: this.auth.value['password']
      })
    );
  }

  Checkloading() {
    return this._loading ? 'is-loading' : '';
  }

  get username() {
    return this.auth.get('username');
  }
  get password() {
    return this.auth.get('password');
  }
}
