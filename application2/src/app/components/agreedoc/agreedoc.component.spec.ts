import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreedocComponent } from './agreedoc.component';

describe('AgreedocComponent', () => {
  let component: AgreedocComponent;
  let fixture: ComponentFixture<AgreedocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreedocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
