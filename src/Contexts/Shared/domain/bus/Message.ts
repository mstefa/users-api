import { Uuid } from "../value-objects/Uuid";

type MetaInfo = {
  env?: string
  host?: string
}

export default abstract class Message {

  id: Uuid;
  type: string;
  occurred_on: string;
  attributes: any;
  meta : MetaInfo | undefined;

 constructor(entinty :  string, event: string){
  this.id = new Uuid('ef8ac118-8d7f-49cc-abec-78e0d05af80a');
  this.type = `mstefa.user-api.1.event.${entinty}.${event}`;
  this.occurred_on = new Date().toISOString();
 }


};
