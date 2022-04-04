import { UserRoles } from '../../../../../src/Contexts/Auth/Users/domain/UserRoles';

export class UserRolesMother {
  static create(value: Array<string>): UserRoles {
    return new UserRoles(value);
  }

  static user(): UserRoles {
    return this.create(['USER']);
  }


  static admin(): UserRoles {
    return this.create(['USER', 'ADMIN']);
  }
}
