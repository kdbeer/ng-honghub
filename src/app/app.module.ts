import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {AuthGuard} from './auth/guards/auth.guard'
import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule, AppRoutingModule, ReactiveFormsModule,
        EffectsModule.forRoot([]),
        StoreModule.forRoot(reducers, {metaReducers}),
        !environment.production
            ? StoreDevtoolsModule.instrument()
            : []
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}