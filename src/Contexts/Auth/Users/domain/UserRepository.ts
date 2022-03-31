import { User } from './User';

export interface UserRepository {
  save(course: User): Promise<void>;
  search(course: User): Promise<void>;
}