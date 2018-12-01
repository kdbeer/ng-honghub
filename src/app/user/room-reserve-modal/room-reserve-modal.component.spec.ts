import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomReserveModalComponent } from './room-reserve-modal.component';

describe('RoomReserveModalComponent', () => {
  let component: RoomReserveModalComponent;
  let fixture: ComponentFixture<RoomReserveModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomReserveModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomReserveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
