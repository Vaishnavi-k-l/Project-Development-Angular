import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHrChartMComponent } from './card-hr-chart-m.component';

describe('CardHrChartMComponent', () => {
  let component: CardHrChartMComponent;
  let fixture: ComponentFixture<CardHrChartMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHrChartMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHrChartMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
