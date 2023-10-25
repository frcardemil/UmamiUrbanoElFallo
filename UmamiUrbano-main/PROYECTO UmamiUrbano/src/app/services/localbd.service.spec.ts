import { TestBed } from '@angular/core/testing';

import { LocalbdService } from './localbd.service';

describe('LocalbdService', () => {
  let service: LocalbdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalbdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
