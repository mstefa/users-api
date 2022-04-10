import { InvalidCredentialsError } from './../../../domain/errors/index';
import jwt from 'jsonwebtoken';
import config from '../../../../Auth/Shared/infrastructure/config';
import { Log } from '../logger/Logger';

export class Jwt {

  static sign(data: any, expiration: number): string {

    const privateKey = config.get('jwtSecret');
    return jwt.sign( data, privateKey,
    {
    expiresIn: expiration
    });
  }

  static decode(token: string): any {
    const privateKey = config.get('jwtSecret');
    try {
      return jwt.verify(token, privateKey);
    } catch (err) {
      Log.error(`Invalid credential on decoding token: '${token}' `);
      throw InvalidCredentialsError;
    }
  }

}
