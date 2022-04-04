import { Nullable } from '../../../Shared/domain/Nullable';
import { UserId } from '../../Shared/domain/Users/UserId';
import { User } from './User';

export interface UserRepository {
  save(user: User): Promise<void>;
  search(id: UserId): Promise<Nullable<User>>;
}
