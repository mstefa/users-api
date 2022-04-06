import { UserToken } from './../domain/UserToken';
import { LoginReponse } from './LoginResponse';
import { LoginRequest } from './LoginRequest';
import { UserRepository } from './../domain/UserRepository';
import { UserEmail } from '../domain/UserEmail';

export class LoginCreator{

  private repository: UserRepository;

  constructor(repository: UserRepository){
    this.repository = repository;
  }

  async run(req: LoginRequest): Promise<LoginReponse> {

    const user = await this.repository.findByEmail(new UserEmail(req.email));

    if(!user?.password.compare(req.password)){  //Move to Domain Object
      throw new Error('not found')
    };

    const token = new UserToken({id: user.id, email: user.email}); //Move to Domain Object

    return {token: token.toString()}
  }
}
