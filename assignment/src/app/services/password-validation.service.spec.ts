import { TestBed } from '@angular/core/testing';

import { PasswordValidationService } from './password-validation.service';

describe('PasswordValidationService', () => {
  let service: PasswordValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fail validation for a short password', () => {
    const shortPassword = 'P1zz@';
    expect(service.validatePassword(shortPassword)).toBeFalse();
  });

  it('should fail validation for no digit', () => {
    const noDigitPassword = 'iLoveProgramming';
    expect(service.validatePassword(noDigitPassword)).toBeFalse();
  });

  it('should pass validation for a valid password', () => {
    const validPassword = 'Fi#91@';
    expect(service.validatePassword(validPassword)).toBeTrue();
  });
});
