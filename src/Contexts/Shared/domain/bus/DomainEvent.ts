import { UuidGenerator } from '../../infrastructure/utils/uuidGenerator/UuidGenerator';


export abstract class DomainEvent {
  static EVENT_NAME: string;
  static fromPrimitives: (...args: any[]) => any;
  readonly aggregateId: string;
  readonly eventId: string;
  readonly occurredOn: Date;
  readonly eventName: string;

  constructor(eventName: string, aggregateId: string, eventId?: string, occurredOn?: Date) {
    this.aggregateId = aggregateId;
    this.eventId = eventId || UuidGenerator.generate().toString();;
    this.occurredOn = occurredOn || new Date();
    this.eventName = eventName;
  }

  abstract toPrimitive(): Object;
}

export type DomainEventClass = { EVENT_NAME: string, fromPrimitives(...args: any[]): DomainEvent; };
