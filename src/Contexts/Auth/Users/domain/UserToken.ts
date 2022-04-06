import { tokenData } from './tokenData';
import { StringValueObject } from "../../../Shared/domain/value-objects/StringValueObject";
import { Jwt } from '../../../Shared/infrastructure/utils/jwt/auth0';

export class UserToken extends StringValueObject {

  constructor( data: tokenData ){

    const token = Jwt.sign({id: data.id.toString(), email: data.email.toString()}, 60*60*24)
    super(token);

  }




}
