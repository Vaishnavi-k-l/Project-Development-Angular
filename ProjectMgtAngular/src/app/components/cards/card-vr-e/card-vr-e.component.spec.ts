import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVrEComponent } from './card-vr-e.component';

describe('CardVrEComponent', () => {
  let component: CardVrEComponent;
  let fixture: ComponentFixture<CardVrEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardVrEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVrEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
