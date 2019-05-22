import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';
import * as fromAuth from './auth.reducer';
import { AuthGuard } from './guards/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MainModule } from '../main/main.module';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    MainModule,
    CommonModule,
    AuthRoutingModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature('auth', fromAuth.reducer)
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [AuthGuard]
    };
  }
}
