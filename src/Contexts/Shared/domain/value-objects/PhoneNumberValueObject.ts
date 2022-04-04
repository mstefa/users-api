import { InvalidArgumentError } from '../errors/index';

export abstract class PhoneNumberValueObject {
    readonly value: string;

    constructor(value: string) {
      this.ensureIsValidPhoneNumber(value);
      this.value = value;
    }

    toString(): string {
      return this.value;
    }

    private ensureIsValidPhoneNumber(phoneNumber: string): void {

        const phoneNumberPatern =  new RegExp('^[+][0-9]{10,17}');

        if (!phoneNumberPatern.test(phoneNumber)) {
          throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${phoneNumber}>`);
        }
      }
  }
