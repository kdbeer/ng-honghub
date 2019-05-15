import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GlobalEffects } from './global.effects';

describe('GlobalEffects', () => {
  let actions$: Observable<any>;
  let effects: GlobalEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GlobalEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(GlobalEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
