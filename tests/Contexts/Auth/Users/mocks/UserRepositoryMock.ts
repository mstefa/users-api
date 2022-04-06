import { UserId } from '../../../../../src/Contexts/Auth/Shared/domain/Users/UserId';
import { User } from '../../../../../src/Contexts/Auth/Users/domain/User';
import { UserEmail } from '../../../../../src/Contexts/Auth/Users/domain/UserEmail';
import { UserMother } from '../domain/UserMother';
import { UserRepository } from './../../../../../src/Contexts/Auth/Users/domain/UserRepository';
export class UserRepositoryMock implements UserRepository{

  private mockSave = jest.fn();
  private mockUser: User = UserMother.random();

  async save(user: User): Promise<void> {
    this.mockSave(user);
  }

  search(id: UserId): Promise<User> {
    throw new Error('Method not implemented.');
  }

  findByEmail(email: UserEmail): Promise<User> {
    return Promise.resolve(this.mockUser);
  }


  assertLastSavedUserIs(expected: User): void {
    const mock = this.mockSave.mock;
    const lastSavedUser = mock.calls[mock.calls.length -1][0] as User;
    expect(lastSavedUser).toBeInstanceOf(User);
    expect(lastSavedUser.id).toEqual(expected.id);
  }

  createMockUser(user: User):void {
    this.mockUser = user;
  }

}
