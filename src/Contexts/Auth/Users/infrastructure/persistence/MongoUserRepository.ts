import { UserRepository } from './../../domain/UserRepository';
import { User } from './../../domain/User';
import { MongoRepository } from '../../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import { Nullable } from '../../../../Shared/domain/Nullable';
import { UserId } from '../../../Shared/domain/Users/UserId';

interface UserDocument {
  _id: string;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: Array<string>;
  country: string;
  phone: string;
}

export class MongoUserRepository extends MongoRepository<User> implements UserRepository {

  save(user: User): Promise<void> {
    return this.persist(user.id.value, user);
  }

  async search(id: UserId): Promise<Nullable<User>> {
    const collection = await this.collection();
    const document = await collection.findOne<UserDocument>({ _id: id.value });
    return document ? User.fromPrimitives({
      id: document._id,
      userName: document.userName,
      password: document.password,
      firstName: document.firstName,
      lastName: document.lastName,
      email: document.email,
      roles: document.roles,
      country: document.country,
      phone: document.phone,
    }) : null;
  }
  protected collectionName(): string {
    return 'courses';
  }

}
