import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedialogComponent } from './completedialog.component';

describe('CompletedialogComponent', () => {
  let component: CompletedialogComponent;
  let fixture: ComponentFixture<CompletedialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
