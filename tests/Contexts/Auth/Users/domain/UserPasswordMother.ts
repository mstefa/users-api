import { PasswordMother } from './../../../Shared/domain/PasswordMother';
import { UserPassword } from '../../../../../src/Contexts/Auth/Users/domain/UserPassword';

export class UserPasswordMother {
  static create(value: string): UserPassword {
    return new UserPassword(value, false);
  }

  static random(): UserPassword {
    return this.create(PasswordMother.random({ minLength :8, maxLength: 12 }));
  }
}
