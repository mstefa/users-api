// import { UserEmail } from './../domain/UserEmail';
import { DomainEventClass } from '../../../Shared/domain/bus/DomainEvent';
import { DomainEventSubscriber } from '../../../Shared/domain/bus/DomainEventSubscriber';
import { UserCreatedEvent } from '../domain/UserCreatedEvent';

export default class ConfirmUserMail implements DomainEventSubscriber<UserCreatedEvent> {

  // constructor(private sendWelcomeUserEmail: SendWelcomeUserEmail) {}
  constructor() {}

  subscribedTo(): DomainEventClass[] {
    return [UserCreatedEvent];
  }

  async on(domainEvent: UserCreatedEvent): Promise<void> {

    // const userEmailAddress = new UserEmail(domainEvent.userEmailAddress);
    console.log(domainEvent.eventId);
  }
}
