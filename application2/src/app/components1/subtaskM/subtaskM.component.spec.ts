import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtaskMComponent } from './subtaskM.component';

describe('SubtaskMComponent', () => {
  let component: SubtaskMComponent;
  let fixture: ComponentFixture<SubtaskMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtaskMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtaskMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
