import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkforceMComponent } from './workforce-m.component';

describe('WorkforceMComponent', () => {
  let component: WorkforceMComponent;
  let fixture: ComponentFixture<WorkforceMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkforceMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkforceMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
