import { tokenData } from './tokenData';
import { UserEmail } from './UserEmail';
import { UserId } from '../../Shared/domain/Users/UserId';
import { StringValueObject } from '../../../Shared/domain/value-objects/StringValueObject';
import { Jwt } from '../../../Shared/infrastructure/utils/jwt/auth0';

export class IncomingToken extends StringValueObject {

  constructor( token: string ) {
     super(token);
  }

  decode(): tokenData {
    const data = Jwt.decode(this.value);
    const id = new UserId(data.id);
    const email = new UserEmail(data.email);

    return {id, email};
  }

}
