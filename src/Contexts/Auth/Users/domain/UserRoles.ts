import { InvalidArgumentError } from "../../../Shared/domain/errors";
import { Roles } from "./Roles";

export abstract class UserRoles {

  readonly value: [string];
  readonly roles = Roles

  constructor(value: [string]) {

  value.forEach(element => {
    if (!(element in this.roles)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${value}>`);
    }
    });
    
    this.value = value;

  }

  toString(): string {
    let output : string = '';
    this.value.forEach(element => output.concat(element + ' '))
    return output;
  }
}