import {DomainEvent} from "../../../Shared/domain/bus/DomainEvent";
// type UserRegisteredDomainEventBody = { userEmailAddress: string };

type UserCreatedEventBody = { userEmail: string };

export class UserCreatedEvent extends DomainEvent {
  static readonly EVENT_NAME = 'user.registered';
  readonly userEmail: string;

  constructor(data: { aggregateId: string, email: string, eventId?: string; occurredOn?: Date }) {
    const { aggregateId, eventId, occurredOn, email } = data;
    super(UserCreatedEvent.EVENT_NAME, aggregateId, eventId, occurredOn);
    this.userEmail = email;
  }

  toPrimitive(): Object {
    return {
      eventName: UserCreatedEvent.EVENT_NAME,
      userEmail: this.userEmail,
      aggregateId: this.aggregateId,
    };
  }

  static fromPrimitives(
    aggregateId: string,
    eventId: string,
    occurredOn: Date,
    body: UserCreatedEventBody,
  ): DomainEvent {
    return new UserCreatedEvent(
      {
      aggregateId,
      email: body.userEmail,
      eventId,
      occurredOn
    });
  }
}
