import { TestBed } from '@angular/core/testing';

import { BitlogicService } from './bitlogic.service';

describe('BitlogicService', () => {
  let service: BitlogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitlogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
