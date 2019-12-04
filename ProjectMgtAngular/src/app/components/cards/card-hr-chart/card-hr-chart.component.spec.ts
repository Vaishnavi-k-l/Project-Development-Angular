import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHrChartComponent } from './card-hr-chart.component';

describe('CardHrChartComponent', () => {
  let component: CardHrChartComponent;
  let fixture: ComponentFixture<CardHrChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHrChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHrChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
