import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AuthGuard } from './auth/guards/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { HeadersComponent } from './components/headers/headers.component';
import { SidebarsComponent } from './components/sidebars/sidebars.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ToastModule } from './toast/toast.module';
@NgModule({
  declarations: [AppComponent, HeadersComponent, SidebarsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    HttpModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
