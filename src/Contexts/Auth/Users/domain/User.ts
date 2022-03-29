import { AggregateRoot } from "../../../Shared/domain/AggregateRoot";
import { UserId } from "../../Shared/domain/Users/userId";
import { UserEmail } from "./UserEmail";
import { UserFirstName } from "./UserFirstName";
import { UserLastName } from "./UserLastName";
import { UserName } from "./UserName";
import { UserPassword } from "./UserPassword";
import { UserPhone } from "./UserPhone";
import { UserRoles } from "./UserRoles";

export class User extends AggregateRoot {
  readonly id: UserId;
  readonly userName: UserName;
  readonly password: UserPassword;
  readonly firstName: UserFirstName;
  readonly lastName: UserLastName;
  readonly email: UserEmail;
  readonly roles: UserRoles;
  readonly phone: UserPhone;

  constructor({ id, userName, password, firstName, lastName, email, roles, phone }: { id: UserId, userName: UserName, password: UserPassword, firstName : UserFirstName, lastName: UserLastName, email: UserEmail, roles : UserRoles, phone: UserPhone }){
    super()
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.roles = roles;
    this.phone = phone;
  }




  toPrimitives() {
    return {
      id: this.id.value,
      userName: this.userName,
      password: this.password,
      firstName : this.firstName,
      lastName : this.lastName,
      email : this.email,
      roles : this.roles,
      phone : this.phone,
    }
  }

}