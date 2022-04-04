import { EmailMother } from './../../../Shared/domain/EmailMother';
import { UserEmail } from '../../../../../src/Contexts/Auth/Users/domain/UserEmail';

export class UserEmailMother {
  static create(value: string): UserEmail {
    return new UserEmail(value);
  }

  static random(): UserEmail {
    return this.create(EmailMother.random());
  }
}
