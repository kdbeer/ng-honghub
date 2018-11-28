import { Component, OnInit } from '@angular/core';
import { AppState } from 'app/reducers';
import { Store } from '@ngrx/store';
import { LoginAction } from '../auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  login() {
    console.log('test');
    this.store.dispatch(
      new LoginAction({ username: 'username', password: 'password' })
    );
  }
}
