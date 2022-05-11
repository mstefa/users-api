import { User } from './User';
import Message from "../../../Shared/domain/bus/Message";
import config from '../../Shared/infrastructure/config'

export class UserCreated extends Message{
  attributes: User;

  constructor(user : User){
    super('user', 'created')
    this.attributes = user;
    this.meta = {
      env: config.get('env')
    }
  }
}
