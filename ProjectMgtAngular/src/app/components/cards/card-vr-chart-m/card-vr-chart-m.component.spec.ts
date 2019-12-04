import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVrChartMComponent } from './card-vr-chart-m.component';

describe('CardVrChartMComponent', () => {
  let component: CardVrChartMComponent;
  let fixture: ComponentFixture<CardVrChartMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardVrChartMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVrChartMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
