import { StringValueObject } from '../../../Shared/domain/value-objects/StringValueObject';
import { InvalidArgumentError } from '../../../Shared/domain/errors/index';


export class UserName extends StringValueObject {

  constructor(value: string) {
        super(value);
        this.ensureLengthIsLessThan30Characters(this.value);
    }

    private ensureLengthIsLessThan30Characters(value: string): void {

        if (value.length > 30) {
            throw new InvalidArgumentError(`The User Name <${value}> has more than 30 characters`);
        }
    }
}
