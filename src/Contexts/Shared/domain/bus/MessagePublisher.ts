import Message from "./Message";

export interface MessagePublisher {

  publish(message: Message ): void;

}
