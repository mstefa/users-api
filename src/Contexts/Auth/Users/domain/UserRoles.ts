import { InvalidArgumentError } from '../../../Shared/domain/errors';
import { Roles } from './Roles';

export class UserRoles {

  readonly value: Array<string>;
  readonly roles = Roles;

  constructor(value: Array<string>) {

  value.forEach(element => {
    if (!(element in this.roles)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${value}>`);
    }
    });

    this.value = value;

  }

  toString(): string {
    const output = '';
    this.value.forEach(element => output.concat(element + ' '));
    return output;
  }
}
