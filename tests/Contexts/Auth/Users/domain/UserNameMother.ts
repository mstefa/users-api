import { NameMother } from './../../../Shared/domain/NameMother';
import { UserName } from '../../../../../src/Contexts/Auth/Users/domain/UserName';

export class UserNameMother {
  static create(value: string): UserName {
    return new UserName(value);
  }

  static random(): UserName {
    return this.create(NameMother.random());
  }
}
