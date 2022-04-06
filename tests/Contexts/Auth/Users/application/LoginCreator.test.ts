import { IncomingToken } from './../../../../../src/Contexts/Auth/Users/domain/IncomingToken';
import { LoginCreator } from './../../../../../src/Contexts/Auth/Users/application/LoginCreator';
import { CreateLoginRequestMother } from './CreateLoginRequestMother';
import { UserRepositoryMock } from './../mocks/UserRepositoryMock';
import { CreateUserRequestMother } from './CreateUserRequestMother';
import { UserMother } from '../domain/UserMother';

let repository: UserRepositoryMock;
let creator: LoginCreator;

beforeEach(()=>{
  repository = new UserRepositoryMock();
  creator = new LoginCreator(repository);
});

describe('LoginCreator', () => {
  it('should login a user with valid credentials', async () => {

    const userRequest = CreateUserRequestMother.random();
    const user = UserMother.fromRequest(userRequest);
    const request = CreateLoginRequestMother.create(userRequest.email, userRequest.password);
    repository.createMockUser(user);

    const response = await creator.run(request);

    const token = new IncomingToken(response.token)
    const {id, email }= token.decode()

    expect(id).toEqual(user.id)
    expect(email).toEqual(user.email)

  });
});
