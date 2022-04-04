import { NameMother } from '../../../Shared/domain/NameMother';
import { UserFirstName } from '../../../../../src/Contexts/Auth/Users/domain/UserFirstName';

export class UserFirstNameMother {
  static create(value: string): UserFirstName {
    return new UserFirstName(value);
  }

  static random(): UserFirstName {
    return this.create(NameMother.random());
  }
}
