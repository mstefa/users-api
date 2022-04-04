import { InvalidArgumentError } from '../errors';
import { Country } from './CountryEnum';

export abstract class CountryValueObject {

  readonly value: string;

  constructor(value: string) {

    if (!(value in Country)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${value}>`);
    }

    this.value = value;

  }

  toString(): string {
    return this.value;
  }
}
