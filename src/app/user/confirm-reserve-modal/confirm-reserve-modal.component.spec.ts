import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmReserveModalComponent } from './confirm-reserve-modal.component';

describe('ConfirmReserveModalComponent', () => {
  let component: ConfirmReserveModalComponent;
  let fixture: ComponentFixture<ConfirmReserveModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmReserveModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmReserveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
