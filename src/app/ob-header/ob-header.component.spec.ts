import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObHeaderComponent } from './ob-header.component';

describe('ObHeaderComponent', () => {
  let component: ObHeaderComponent;
  let fixture: ComponentFixture<ObHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
