import { EmailMother } from './../../../Shared/domain/EmailMother';
import { PasswordMother } from './../../../Shared/domain/PasswordMother';
import { LoginRequest } from './../../../../../src/Contexts/Auth/Users/application/LoginRequest';

export class CreateLoginRequestMother {
  static create(
    email: string,
    password: string,
  ): LoginRequest{
    return{
      password: password,
      email: email
    }
  }

  static random(): CreateLoginRequestMother {
    return this.create(
      EmailMother.random(),
      PasswordMother.random({minLength: 8, maxLength: 30}),
    )
  }
}
