import { TestBed, async, inject } from '@angular/core/testing';

import { EnsureLoginGuardGuard } from './ensure-login-guard.guard';

describe('EnsureLoginGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnsureLoginGuardGuard]
    });
  });

  it('should ...', inject([EnsureLoginGuardGuard], (guard: EnsureLoginGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
