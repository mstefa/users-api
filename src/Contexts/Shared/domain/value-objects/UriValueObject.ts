import { InvalidArgumentError } from '../errors/index';

export abstract class UriValueObject {
    readonly value: string;
  
    constructor(value: string) {
      this.ensureIsValidUri(value);
      this.value = value;
    }
  
    toString(): string {
      return this.value;
    }

    private ensureIsValidUri(uri: string): void {

        const phoneNumberPatern =  new RegExp('(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})');

        if (!phoneNumberPatern.test(uri)) {
          throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${uri}>`);
        }
      }
  }