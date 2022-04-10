import { InvalidCredentialsError } from './../../../Shared/domain/errors/index';
import { UserCountry } from './UserCountry';
import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { UserId } from '../../Shared/domain/Users/UserId';
import { UserEmail } from './UserEmail';
import { UserFirstName } from './UserFirstName';
import { UserLastName } from './UserLastName';
import { UserName } from './UserName';
import { UserPassword } from './UserPassword';
import { UserPhone } from './UserPhone';
import { UserRoles } from './UserRoles';

export class User extends AggregateRoot {
  readonly id: UserId;
  readonly userName: UserName;
  readonly password: UserPassword;
  readonly firstName: UserFirstName;
  readonly lastName: UserLastName;
  readonly email: UserEmail;
  readonly roles: UserRoles;
  readonly country: UserCountry;
  readonly phone: UserPhone;

  constructor({ id, userName, password, firstName, lastName, email, roles, country, phone }:
    { id: UserId, userName: UserName, password: UserPassword, firstName: UserFirstName, lastName: UserLastName,
      email: UserEmail, roles: UserRoles, country: UserCountry, phone: UserPhone }) {
    super();
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.roles = roles;
    this.country = country;
    this.phone = phone;
  }

  validatePassword(givenPassword: string) {

    if (!this.password.compare(givenPassword)) {
      throw InvalidCredentialsError;
    }

  }

  toPrimitives() {
    return {
      id: this.id.value,
      userName: this.userName.value,
      password: this.password.value,
      firstName : this.firstName.value,
      lastName : this.lastName.value,
      email : this.email.value,
      roles : this.roles.value,
      country : this.country.value,
      phone : this.phone.value,
    };
  }

  static fromPrimitives(plainData: {
    id: string;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    roles: Array<string>;
    country: string;
    phone: string;
  }): User {
    return new User({
      id: new UserId(plainData.id),
      userName: new UserName(plainData.userName),
      password: new UserPassword(plainData.password, true),
      firstName: new UserFirstName(plainData.firstName),
      lastName: new UserLastName(plainData.lastName),
      email: new UserEmail(plainData.email),
      roles: new UserRoles(plainData.roles),
      country: new UserCountry(plainData.country),
      phone: new UserPhone(plainData.phone)
    });
  }

}
