// import { DomainEvent } from './bus/DomainEvent';

export abstract class AggregateRoot {

  // private domainEvents: Array<DomainEvent>;

  constructor() {
    // this.domainEvents = [];
  }

  abstract toPrimitives(): any;

  // pullDomainEvents(): Array<DomainEvent> {  //TODO
  //   const domainEvents = this.domainEvents.slice();
  //   this.domainEvents = [];

  //   return domainEvents;
  // }

  // record(event: DomainEvent): void { //TODO
  //   this.domainEvents.push(event);
  // }

}
