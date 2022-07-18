import { TestBed } from '@angular/core/testing';

import { GuardPatientGuard } from './guard-patient.guard';

describe('GuardPatientGuard', () => {
  let guard: GuardPatientGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardPatientGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
