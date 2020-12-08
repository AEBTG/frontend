import { TestBed } from '@angular/core/testing';

import { AeWalletService } from './ae-wallet.service';

describe('AeWalletService', () => {
  let service: AeWalletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeWalletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
