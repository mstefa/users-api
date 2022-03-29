import { InvalidArgumentError } from '../errors/index';

export abstract class EmailValueObject {
    readonly value: string;
  
    constructor(value: string) {
      this.ensureIsValidEmail(value);
      this.value = value;
    }
  
    toString(): string {
      return this.value;
    }

    private ensureIsValidEmail(email: string): void {

        const emailPatern =  new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

        if (!emailPatern.test(email)) {
          throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${email}>`);
        }
      }
  }