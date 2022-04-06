import { UserEmail } from './UserEmail';
import { UserId } from './../../Shared/domain/Users/UserId';
import { StringValueObject } from "../../../Shared/domain/value-objects/StringValueObject";
import { Jwt } from '../../../Shared/infrastructure/utils/jwt/auth0';

export class UserToken extends StringValueObject {

  constructor( id:UserId, email:UserEmail ){

    const token = Jwt.sign({id: id.toString(), email: email.toString()}, 60*60*24)
    super(token);

  }
}
