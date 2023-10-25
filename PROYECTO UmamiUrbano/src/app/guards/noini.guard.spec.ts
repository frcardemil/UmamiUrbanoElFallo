import { TestBed } from '@angular/core/testing';

import { NoiniGuard } from './noini.guard';

describe('NoiniGuard', () => {
  let guard: NoiniGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoiniGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
