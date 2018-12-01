import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveAbleComponent } from './reserve-able.component';

describe('ReserveAbleComponent', () => {
  let component: ReserveAbleComponent;
  let fixture: ComponentFixture<ReserveAbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveAbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveAbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
