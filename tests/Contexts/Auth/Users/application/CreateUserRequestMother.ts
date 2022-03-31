import { PhoneMother } from './../../../Shared/domain/PhoneMother';
import { EmailMother } from './../../../Shared/domain/EmailMother';
import { PasswordMother } from './../../../Shared/domain/PasswordMother';
import { UuidMother } from './../../../Shared/domain/UuidMother';
import { NameMother } from './../../../Shared/domain/NameMother'
import { CreateUserRequest } from '../../../../../src/Contexts/Auth/Users/application/CreateUserRequest';
import { LastNameMother } from '../../../Shared/domain/LastNameMother';




export class CreateUserRequestMother {
  static create(
    id: string,
    userName: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    roles: Array<string>,
    country: string,
    phone: string ): CreateUserRequest  {
    return {
      id: id,
      user_name: userName,
      password: password,
      first_name : firstName,
      last_name : lastName,
      email : email,
      roles : roles,
      country_id : country,
      phone_number : phone };
  }

  static random(): CreateUserRequest {

    return this.create(
      UuidMother.random(),
      NameMother.random(), // name
      PasswordMother.random({minLength: 8, maxLength: 30}), //pas
      NameMother.random(),  //fn
      LastNameMother.random(), // ln
      EmailMother.random(), // email
      ['USER', 'ADMIN'] ,
      "AR",
      PhoneMother.random(),
      );
  }

  static invalidUUID(): CreateUserRequest {

    return this.create(
      'fakeUUID',
      NameMother.random(), // name
      PasswordMother.random({minLength: 8, maxLength: 30}), //pas
      NameMother.random(),  //fn
      LastNameMother.random(), // ln
      EmailMother.random(), // email
      ['USER', 'ADMIN'] ,
      "AR",
      PhoneMother.random(),
      );
  }

  static invalidPassword(): CreateUserRequest {

    return this.create(
      UuidMother.random(),
      NameMother.random(), // name
      'weakpass',
      NameMother.random(),  //fn
      LastNameMother.random(), // ln
      EmailMother.random(), // email
      ['USER', 'ADMIN'] ,
      "AR",
      PhoneMother.random(),
      );
  }

}
