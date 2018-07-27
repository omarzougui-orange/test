import { TestBed, inject } from '@angular/core/testing';

import { TransferLocalStorageMockService } from './transfer-local-storage-mock.service';

describe('TransferLocalStorageMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransferLocalStorageMockService]
    });
  });

  it('should be created', inject([TransferLocalStorageMockService], (service: TransferLocalStorageMockService) => {
    expect(service).toBeTruthy();
  }));
});
