import { InvalidArgumentError } from '../errors/index';
import bcrypt from 'bcrypt';

export abstract class PasswordValueObject {

  readonly value: string;

  constructor(value: string, encrypted: boolean) {

    if (!encrypted) {

      this.ensureIsValidPassword(value);
      this.value = this.encrypt(value) ;

    } else {
      this.value = value;
    }

  }

  private ensureIsValidPassword(password: string): void {

    const passwordPatern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'); //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number

    if (!passwordPatern.test(password)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${password}>`);
    }
  }

  private encrypt(plaintext: string): string {

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(plaintext, salt);

  }

  compare(plaintext: string): boolean {
    return bcrypt.compareSync(plaintext, this.value);
  }

}
