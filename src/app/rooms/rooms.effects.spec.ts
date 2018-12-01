import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RoomsEffects } from './rooms.effects';

describe('RoomsEffects', () => {
  let actions$: Observable<any>;
  let effects: RoomsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RoomsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(RoomsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
