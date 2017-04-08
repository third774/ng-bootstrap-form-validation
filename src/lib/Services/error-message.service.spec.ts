import { TestBed, inject } from '@angular/core/testing';

import { ErrorMessageService } from './error-message.service';

describe('ErrorMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorMessageService]
    });
  });

  it('should ...', inject([ErrorMessageService], (service: ErrorMessageService) => {
    expect(service).toBeTruthy();
  }));
});
