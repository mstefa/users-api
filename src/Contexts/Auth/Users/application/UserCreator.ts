import { UserCreatedEvent } from './../domain/UserCreatedEvent';
import { User } from '../domain/User';
import { UserCountry } from '../domain/UserCountry';
import { UserEmail } from '../domain/UserEmail';
import { UserFirstName } from '../domain/UserFirstName';
import { UserLastName } from '../domain/UserLastName';
import { UserName } from '../domain/UserName';
import { UserPassword } from '../domain/UserPassword';
import { UserPhone } from '../domain/UserPhone';
import { UserRoles } from '../domain/UserRoles';
import { UserId } from './../../Shared/domain/Users/UserId';
import { UserRepository } from './../domain/UserRepository';
import { CreateUserRequest } from './CreateUserRequest';
import { EventBus } from '../../../Shared/domain/bus/EventBus';

export class UserCreator {

  private repository: UserRepository;
  private eventBus: EventBus

  constructor(repository: UserRepository, eventBus: EventBus) {
    this.repository = repository;
    this.eventBus = eventBus;
  }

  async run(request: CreateUserRequest): Promise<void> {
    const user = new User({
      id: new UserId(request.id),
      userName: new UserName(request.user_name),
      password: new UserPassword(request.password, false),
      firstName: new UserFirstName(request.first_name),
      lastName: new UserLastName(request.last_name),
      email: new UserEmail(request.email),
      roles: new UserRoles(request.roles),
      country: new UserCountry(request.country_id),
      phone: new UserPhone(request.phone_number)
    });

    this.repository.save(user);

    await this.eventBus.publish([new UserCreatedEvent({aggregateId: user.id.value, email: user.email.value})]);

    return Promise.resolve();
  }

}
