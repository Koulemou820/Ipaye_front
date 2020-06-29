import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxEchangeAddComponent } from './taux-echange-add.component';

describe('TauxEchangeAddComponent', () => {
  let component: TauxEchangeAddComponent;
  let fixture: ComponentFixture<TauxEchangeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TauxEchangeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TauxEchangeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
