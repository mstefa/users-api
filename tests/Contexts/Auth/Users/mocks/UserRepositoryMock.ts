import { User } from '../../../../../src/Contexts/Auth/Users/domain/User';
import { UserRepository } from './../../../../../src/Contexts/Auth/Users/domain/UserRepository';
export class UserRepositoryMock implements UserRepository{

  private mockSave = jest.fn();

  async save(course: User): Promise<void> {
    this.mockSave(course);
  }

  search(course: User): Promise<void> {
    throw new Error('Method not implemented.');
  }

  assertLastSavedUserIs(expected: User): void {
    const mock = this.mockSave.mock;
    const lastSavedUser = mock.calls[mock.calls.length -1][0] as User;
    expect(lastSavedUser).toBeInstanceOf(User);
    expect(lastSavedUser.id).toEqual(expected.id);
  }

}
