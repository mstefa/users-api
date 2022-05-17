import { v4 as uuidv4 } from 'uuid';
import { Uuid } from '../../../domain/value-objects/Uuid';

export class UuidGenerator {
  static generate(): Uuid {
    return new Uuid(uuidv4());
  }
}
