import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteProjectComponent } from './completeproject.component';

describe('CompleteprojectComponent', () => {
  let component: CompleteProjectComponent;
  let fixture: ComponentFixture<CompleteProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
