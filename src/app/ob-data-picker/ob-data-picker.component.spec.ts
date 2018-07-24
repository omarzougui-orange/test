import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObDataPickerComponent } from './ob-data-picker.component';

describe('ObDataPickerComponent', () => {
  let component: ObDataPickerComponent;
  let fixture: ComponentFixture<ObDataPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObDataPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObDataPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
