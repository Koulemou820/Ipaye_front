import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperateurShowComponent } from './operateur-show.component';

describe('OperateurShowComponent', () => {
  let component: OperateurShowComponent;
  let fixture: ComponentFixture<OperateurShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperateurShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperateurShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
