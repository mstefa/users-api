import { NameMother } from '../../../Shared/domain/NameMother';
import { UserLastName } from '../../../../../src/Contexts/Auth/Users/domain/UserLastName';

export class UserLastNameMother {
  static create(value: string): UserLastName {
    return new UserLastName(value);
  }

  static random(): UserLastName {
    return this.create(NameMother.random());
  }
}
