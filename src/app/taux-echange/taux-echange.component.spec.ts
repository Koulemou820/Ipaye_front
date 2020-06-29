import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxEchangeComponent } from './taux-echange.component';

describe('TauxEchangeComponent', () => {
  let component: TauxEchangeComponent;
  let fixture: ComponentFixture<TauxEchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TauxEchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TauxEchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
