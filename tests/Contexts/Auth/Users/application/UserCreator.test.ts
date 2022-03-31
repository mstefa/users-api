import { UserCreator } from './../../../../../src/Contexts/Auth/Users/application/UserCreator';
import { UserMother } from "../domain/UserMother";
import { CreateUserRequestMother } from "./CreateUserRequestMother"
import { UserRepositoryMock } from '../mocks/UserRepositoryMock';

let repository: UserRepositoryMock;
let creator: UserCreator;

beforeEach(() => {
    repository = new UserRepositoryMock();
    creator = new UserCreator(repository);
  });

describe('UserCreator', () => {
    it('should create a valid User', async () => {
        const request = CreateUserRequestMother.random();

        const user = UserMother.fromRequest(request);

        await creator.run(request);

        repository.assertLastSavedUserIs(user);
    })
})
