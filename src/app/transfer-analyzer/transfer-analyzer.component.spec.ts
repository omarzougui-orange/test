import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferAnalyzerComponent } from './transfer-analyzer.component';

describe('TransferAnalyzerComponent', () => {
  let component: TransferAnalyzerComponent;
  let fixture: ComponentFixture<TransferAnalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferAnalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
