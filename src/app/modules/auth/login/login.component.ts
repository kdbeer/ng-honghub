import {Component, OnInit} from '@angular/core';
import {AppState} from 'app/reducers';
import {Store} from '@ngrx/store';
import {LoginAction, LoginLoading} from '../auth.actions';
import {ModelAuth} from './login.model'
@Component({selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.scss']})
export class LoginComponent implements OnInit {

    private _loading = false

    ngOnInit() {
        this._auth = ModelAuth
        this
            .store
            .subscribe(state => {
                console.log(state)
                this._loading = state['auth']['loading']
            })
    }

    private _auth = ModelAuth
    login() {
        console.log('test ', this._auth.value);
        this
            .store
            .dispatch(new LoginLoading({loading: true, username: this._auth.value["username"], password: this._auth.value["password"]}));
    }

    Checkloading() {
        return (this._loading)
            ? 'is-loading'
            : ''
    }

    get username() {
        return this
            ._auth
            .get('username');
    }
    get password() {
        return this
            ._auth
            .get('password');
    }
    constructor(private store : Store < AppState >) {}
}
