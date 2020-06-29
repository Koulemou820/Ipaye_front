import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviseAddComponent } from './devise-add.component';

describe('DeviseAddComponent', () => {
  let component: DeviseAddComponent;
  let fixture: ComponentFixture<DeviseAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviseAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
