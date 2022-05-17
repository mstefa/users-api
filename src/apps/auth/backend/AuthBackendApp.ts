import { Server } from './server';
import container from './dependency-injection';
import { EventBus } from '../../../Contexts/Shared/domain/bus/EventBus';
import { DomainEventMapping } from '../../../Contexts/Shared/infrastructure/bus/DomainEventMapping';
import { DomainEvent } from '../../../Contexts/Shared/domain/bus/DomainEvent';
// import { Definition } from 'node-dependency-injection';
import { DomainEventSubscriber } from '../../../Contexts/Shared/domain/bus/DomainEventSubscriber';
import { Definition } from 'node-dependency-injection';


export class AuthBackendApp {
  server?: Server;

  async start() {
    const port = process.env.PORT || '5000';
    this.server = new Server(port);
    await this.registerSubscribers();
    return this.server.listen();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }

  async stop() {
    return this.server?.stop();
  }

  private async registerSubscribers() {
    const eventBus = container.get('Shared.EventBus') as EventBus;
    const subscriberDefinitions = container.findTaggedServiceIds('domainEventSubscriber') as Map<String, Definition>;
    const subscribers: Array<DomainEventSubscriber<DomainEvent>> = [];

    subscriberDefinitions.forEach((value: any, key: any) => subscribers.push(container.get(key)));
    const domainEventMapping = new DomainEventMapping(subscribers);

    eventBus.setDomainEventMapping(domainEventMapping);
    eventBus.addSubscribers(subscribers);

    await eventBus.start();
  }

}
