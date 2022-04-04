import { UserCountry } from '../../../../../src/Contexts/Auth/Users/domain/UserCountry';

export class UserCountryMother {
  static create(value: string): UserCountry {
    return new UserCountry(value);
  }

  static random(): UserCountry {
    return this.create('AR');
  }

}
