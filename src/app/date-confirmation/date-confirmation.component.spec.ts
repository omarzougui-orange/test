import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateConfirmationComponent } from './date-confirmation.component';

describe('DateConfirmationComponent', () => {
  let component: DateConfirmationComponent;
  let fixture: ComponentFixture<DateConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
