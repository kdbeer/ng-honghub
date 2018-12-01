import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomReserveComponent } from './room-reserve.component';

describe('RoomReserveComponent', () => {
  let component: RoomReserveComponent;
  let fixture: ComponentFixture<RoomReserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomReserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
