import { UuidGenerator } from './../../infrastructure/utils/uuidGenerator/UuidGenerator';

type MetaInfo = {
  env?: string
  host?: string
}

export default abstract class Message {

  id: string;
  type: string;
  occurred_on: string;
  attributes: any;
  meta : MetaInfo | undefined;

 constructor(entinty :  string, event: string){
  this.id = UuidGenerator.generate().toString();
  this.type = `mstefa.user-api.1.event.${entinty}.${event}`;
  this.occurred_on = new Date().toISOString();
 }


};
