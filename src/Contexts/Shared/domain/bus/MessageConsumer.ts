import Message from "./Message";

export interface MessageConsumer {

  consume(queue: string ): void;

}
