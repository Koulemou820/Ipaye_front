import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperateurAddComponent } from './operateur-add.component';

describe('OperateurAddComponent', () => {
  let component: OperateurAddComponent;
  let fixture: ComponentFixture<OperateurAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperateurAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperateurAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
