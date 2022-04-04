import { PhoneMother } from './../../../Shared/domain/PhoneMother';
import { UserPhone } from '../../../../../src/Contexts/Auth/Users/domain/UserPhone';

export class UserPhoneMother {
  static create(value: string): UserPhone {
    return new UserPhone(value);
  }

  static random(): UserPhone {
    return this.create(PhoneMother.random());
  }
}
