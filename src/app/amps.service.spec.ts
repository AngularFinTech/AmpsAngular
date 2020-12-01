import { TestBed } from '@angular/core/testing';

import { AmpsService } from './amps.service';

describe('AmpsService', () => {
  let service: AmpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
