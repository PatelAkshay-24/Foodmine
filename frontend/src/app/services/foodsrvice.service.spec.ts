import { TestBed } from '@angular/core/testing';

import { FoodsrviceService } from './foodsrvice.service';

describe('FoodsrviceService', () => {
  let service: FoodsrviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodsrviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
