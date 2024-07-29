import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordValidationService {
  constructor() {}

  validatePassword(password: string): boolean {
    const lengthRegex = /^.{3,20}$/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const repeatingLettersRegex = /^(?!.*([a-zA-Z])\1{2}).*$/;
    const specialCharacterRegex = /(?:.*[!"#$%&'()*=?+@{}[\]:;]){2}/;

    return (
      lengthRegex.test(password) &&
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password) &&
      digitRegex.test(password) &&
      repeatingLettersRegex.test(password) &&
      specialCharacterRegex.test(password)
    );
  }
}
