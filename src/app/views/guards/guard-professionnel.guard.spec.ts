import { TestBed } from '@angular/core/testing';

import { GuardProfessionnelGuard } from './guard-professionnel.guard';

describe('GuardProfessionnelGuard', () => {
  let guard: GuardProfessionnelGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardProfessionnelGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
