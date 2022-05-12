import { RabbitMqMessageConsumer } from './../../../Shared/infrastructure/bus/rabbitmq/RabbitMqMessageConsumer';
import { UserToken } from './../domain/UserToken';
import { LoginReponse } from './LoginResponse';
import { LoginRequest } from './LoginRequest';
import { UserRepository } from './../domain/UserRepository';
import { UserEmail } from '../domain/UserEmail';
import { User } from '../domain/User';
import { MessageConsumer } from '../../../Shared/domain/bus/MessageConsumer';

export class LoginCreator {

  private repository: UserRepository;
  private consumer: MessageConsumer;

  constructor(repository: UserRepository) {
    this.repository = repository;
    this.consumer = new RabbitMqMessageConsumer();
  }

  async run(req: LoginRequest): Promise<LoginReponse> {

    this.consumer.consume('mstefa.user-api.1.event.user.created');

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
