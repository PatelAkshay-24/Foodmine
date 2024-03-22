import { TestBed } from '@angular/core/testing';

import { LodingserviceService } from './lodingservice.service';

describe('LodingserviceService', () => {
  let service: LodingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LodingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
