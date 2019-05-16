import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LandingEffects } from './landing.effects';

describe('LandingEffects', () => {
  let actions$: Observable<any>;
  let effects: LandingEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LandingEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(LandingEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
