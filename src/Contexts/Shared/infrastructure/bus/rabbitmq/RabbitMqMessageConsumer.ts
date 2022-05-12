import { RabbitMqChannelFactory } from './RabbitMqChannelFactory';
import { Channel, ConsumeMessage} from "amqplib"
import { MessageConsumer } from '../../../domain/bus/MessageConsumer';
import { Nullable } from '../../../domain/Nullable';

export class RabbitMqMessageConsumer implements MessageConsumer {

  private channel!: Channel;
  private consumer!: Function;


  constructor() {
    try{
      console.log('soy el consumidor');
      (async () => {
        this.channel = await RabbitMqChannelFactory.createChannel();
       })();
       this.consumer = (channel: Channel) => (msg: Nullable<ConsumeMessage>): void => {
        if (msg) {
          // Display the received message
          console.log(msg)
          // Acknowledge the message
          channel.ack(msg)
        }
      }
    }
    catch(e){
      // Log.error(e)
      console.error(e)
    }
  }

  async consume(queue: string): Promise<void> {
    console.log(
      'start consume'
    )
    await this.channel.consume(queue, this.consumer(this.channel))
  }

}
