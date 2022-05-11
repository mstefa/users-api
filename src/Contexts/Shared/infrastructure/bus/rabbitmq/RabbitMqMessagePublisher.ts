import { RabbitMqChannelFactory } from './RabbitMqChannelFactory';
import { Channel } from "amqplib"
import Message from "../../../domain/bus/Message";
import { MessagePublisher } from "../../../domain/bus/MessagePublisher";

export class RabbitMqMessagePublisher implements MessagePublisher {

  private channel!: Channel;

  constructor() {
    try{
      (async () => {
        this.channel = await RabbitMqChannelFactory.createChannel();
       })();
    }
    catch(e){
      // Log.error(e)
      console.error(e)
    }

  }

  private createQueueIfNotExists(name: string){
    this.channel.assertQueue(name)
  }


  publish(message: Message): void {

    this.createQueueIfNotExists(message.type)
    this.channel.sendToQueue(message.type, Buffer.from('message')) //TODO
    return;
  }



}
