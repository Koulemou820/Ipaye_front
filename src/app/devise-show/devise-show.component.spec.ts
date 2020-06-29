import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviseShowComponent } from './devise-show.component';

describe('DeviseShowComponent', () => {
  let component: DeviseShowComponent;
  let fixture: ComponentFixture<DeviseShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviseShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviseShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
