import jwt from 'jsonwebtoken';
import config from '../../../../Auth/Shared/infrastructure/config';

export class Jwt{

  static sign(data: any, expiration: number): string {

    let privateKey = config.get('jwtSecret')
    return jwt.sign( data, privateKey,
    {
    expiresIn: expiration
    });
  }

}
