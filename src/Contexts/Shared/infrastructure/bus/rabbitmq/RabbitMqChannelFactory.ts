import client, { Channel, Connection } from "amqplib"


export class RabbitMqChannelFactory {

  private static connection: Connection;

  static async createChannel():Promise<Channel> {

    if(!RabbitMqChannelFactory.connection){
      RabbitMqChannelFactory.connection = await client.connect(
        'amqp://username:password@localhost:5672'
      )
    }

    let channel = await RabbitMqChannelFactory.connection.createChannel()

    return channel;
  }

}


