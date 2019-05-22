import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentMenuComponent } from './resident-menu.component';

describe('ResidentMenuComponent', () => {
  let component: ResidentMenuComponent;
  let fixture: ComponentFixture<ResidentMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
