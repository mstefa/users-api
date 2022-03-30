import { UserCreator } from './../../../../../src/Contexts/Auth/Users/application/UserCreator';
import { UserMother } from "../domain/UserMother";
import { CreateUserRequestMother } from "./CreateUserRequestMother"

let creator: UserCreator;

beforeEach(() => {
    // repository = new CourseRepositoryMock();
    creator = new UserCreator();
  });

describe('UserCreator', () => {
    it('should create a valid User', async () => {
        const request = CreateUserRequestMother.random();
        console.log(request)

        const user = UserMother.fromRequest(request);

        console.log(user)
        await creator.run(request);
    })
})