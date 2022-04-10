import { UserToken } from './../domain/UserToken';
import { LoginReponse } from './LoginResponse';
import { LoginRequest } from './LoginRequest';
import { UserRepository } from './../domain/UserRepository';
import { UserEmail } from '../domain/UserEmail';
import { User } from '../domain/User';

export class LoginCreator {

  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async run(req: LoginRequest): Promise<LoginReponse> {

    const optionalUser = await this.repository.searchByEmail(new UserEmail(req.email));

    if ( !optionalUser ) {

      throw new Error;

    }

    const user = optionalUser as User;

    user.validatePassword(req.password);

    const token = new UserToken({id: user?.id, email: user?.email});

    return {token: token.value};

  }
}
