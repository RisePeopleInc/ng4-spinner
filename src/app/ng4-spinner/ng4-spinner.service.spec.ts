import { TestBed, inject } from '@angular/core/testing';

import { Ng4SpinnerService } from './ng4-spinner.service';

describe('Ng4SpinnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ng4SpinnerService]
    });
  });

  it('should be created', inject([Ng4SpinnerService], (service: Ng4SpinnerService) => {
    expect(service).toBeTruthy();
  }));
});
