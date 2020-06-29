import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviseEditComponent } from './devise-edit.component';

describe('DeviseEditComponent', () => {
  let component: DeviseEditComponent;
  let fixture: ComponentFixture<DeviseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
