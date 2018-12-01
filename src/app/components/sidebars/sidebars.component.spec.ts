import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarsComponent } from './sidebars.component';

describe('SidebarsComponent', () => {
  let component: SidebarsComponent;
  let fixture: ComponentFixture<SidebarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
