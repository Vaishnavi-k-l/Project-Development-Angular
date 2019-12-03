import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {CardLayoutMComponent } from './card-layout-m.component';

describe('CardLayoutMComponent', () => {
  let component: CardLayoutMComponent;
  let fixture: ComponentFixture<CardLayoutMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLayoutMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLayoutMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
