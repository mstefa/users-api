import { UserLastNameMother } from './UserLastNameMother';
import { UserEmailMother } from './UserEmailMother';
import { UserCountryMother } from './UserCountryMother';
import { UserRolesMother } from './UserRolesMother';
import { UserPasswordMother } from './UserPasswordMother';
import { UserNameMother } from './UserNameMother';
import { UserIdMother } from './../../shared/domain/Auth/UserIdMother';
import { CreateUserRequest } from './../../../../../src/Contexts/Auth/Users/application/CreateUserRequest';
import { UserPhone } from './../../../../../src/Contexts/Auth/Users/domain/UserPhone';
import { UserEmail } from './../../../../../src/Contexts/Auth/Users/domain/UserEmail';
import { UserLastName } from './../../../../../src/Contexts/Auth/Users/domain/UserLastName';
import { UserFirstName } from './../../../../../src/Contexts/Auth/Users/domain/UserFirstName';
import { UserPassword } from './../../../../../src/Contexts/Auth/Users/domain/UserPassword';
import { UserId } from './../../../../../src/Contexts/Auth/Shared/domain/Users/UserId';
import { UserName } from './../../../../../src/Contexts/Auth/Users/domain/UserName';
import { UserRoles } from './../../../../../src/Contexts/Auth/Users/domain/UserRoles';
import { User } from './../../../../../src/Contexts/Auth/Users/domain/User';
import { UserCountry } from '../../../../../src/Contexts/Auth/Users/domain/UserCountry';
import { UserFirstNameMother } from './UserFirstNameMother';
import { UserPhoneMother } from './UserPhoneMother';


export class UserMother {
  static create(
    id: UserId,
    userName: UserName,
    password: UserPassword,
    firstName: UserFirstName,
    lastName: UserLastName,
    email: UserEmail,
    roles: UserRoles,
    country: UserCountry,
    phone: UserPhone
  ) {
    return new User({ id, userName, password, firstName, lastName, email, roles, country, phone })
  }

  static fromRequest(request: CreateUserRequest): User {

    return this.create(
      new UserId(request.id),
      new UserName(request.user_name),
      new UserPassword(request.password, false),
      new UserFirstName(request.first_name),
      new UserLastName(request.last_name),
      new UserEmail(request.email),
      new UserRoles(request.roles),
      new UserCountry(request.country_id),
      new UserPhone(request.phone_number),
    );
  }

  static random(): User {
    return this.create(
      UserIdMother.random(),
      UserNameMother.random(),
      UserPasswordMother.random(),
      UserFirstNameMother.random(),
      UserLastNameMother.random(),
      UserEmailMother.random(),
      UserRolesMother.admin(),
      UserCountryMother.random(),
      UserPhoneMother.random()
    )
  }

}
