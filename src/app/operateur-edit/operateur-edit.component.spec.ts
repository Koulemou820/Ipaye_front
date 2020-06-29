import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperateurEditComponent } from './operateur-edit.component';

describe('OperateurEditComponent', () => {
  let component: OperateurEditComponent;
  let fixture: ComponentFixture<OperateurEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperateurEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperateurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
