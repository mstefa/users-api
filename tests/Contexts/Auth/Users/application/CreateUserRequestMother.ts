import { PhoneMother } from './../../../Shared/domain/PhoneMother';
import { EmailMother } from './../../../Shared/domain/EmailMother';
import { PasswordMother } from './../../../Shared/domain/PasswordMother';
import { WordMother } from './../../../Shared/domain/WordMother';
import { UuidMother } from './../../../Shared/domain/UuidMother';
// import { UserId } from '../../../../src/Contexts/Auth/Shared/domain/Users/UserId'  
// import { UserName } from '../../../../src/Contexts/Auth/Users/domain/UserName'  
// import { UserFirstName } from '../../../../src/Contexts/Auth/Users/domain/UserFirstName'  
// import { UserLastName } from '../../../../src/Contexts/Auth/Users/domain/UserLastName'  
// import { UserPassword } from '../../../../src/Contexts/Auth/Users/domain/UserPassword'
// import { UserCountry } from '../../../../src/Contexts/Auth/Users/domain/UserCountry'
// import { UserRoles } from '../../../../src/Contexts/Auth/Users/domain/UserRoles'
// import { UserPhone } from '../../../../src/Contexts/Auth/Users/domain/UserPhone'
// import { UserEmail } from '../../../../src/Contexts/Auth/Users/domain/UserEmail'

import { CreateUserRequest } from '../../../../../src/Contexts/Auth/Users/application/CreateUserRequest';




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
      WordMother.random({minLength: 5, maxLength: 30}), // name
      PasswordMother.random({minLength: 8, maxLength: 30}), //pas
      WordMother.random({minLength: 5, maxLength: 30}),  //fn
      WordMother.random({minLength: 5, maxLength: 30}), // ln
      EmailMother.random(), // email
      ['USER', 'ADMIN'] ,
      "AR",
      PhoneMother.random(),
      );
  }

  static invalidUUID(): CreateUserRequest {

    return this.create(
      'fakeUUID',  
      WordMother.random({minLength: 5, maxLength: 30}),
      PasswordMother.random({minLength: 8, maxLength: 30}),
      WordMother.random({minLength: 5, maxLength: 30}),
      WordMother.random({minLength: 5, maxLength: 30}),
      EmailMother.random(),
      ['USER', 'ADMIN'] ,
      "AR",
      PhoneMother.random(),
      );
  }

  static invalidPassword(): CreateUserRequest {

    return this.create(
      UuidMother.random(),   
      WordMother.random({minLength: 5, maxLength: 30}),
      'weakpass',
      WordMother.random({minLength: 5, maxLength: 30}),
      WordMother.random({minLength: 5, maxLength: 30}),
      EmailMother.random(),
      ['USER', 'ADMIN'] ,
      "AR",
      PhoneMother.random(),
      );
  }

}