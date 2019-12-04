import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSmMComponent } from './card-sm-m.component';

describe('CardSmMComponent', () => {
  let component: CardSmMComponent;
  let fixture: ComponentFixture<CardSmMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSmMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSmMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
