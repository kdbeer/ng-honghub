import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromLanding from './landing.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LandingEffects } from './landing.effects';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    StoreModule.forFeature('landing', fromLanding.reducer),
    EffectsModule.forFeature([LandingEffects])
  ]
})
export class LandingModule { }
