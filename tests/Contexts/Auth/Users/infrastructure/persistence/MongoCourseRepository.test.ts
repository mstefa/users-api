import container from '../../../../../../src/apps/auth/backend/dependency-injection';
import { UserRepository } from './../../../../../../src/Contexts/Auth/Users/domain/UserRepository';
import { EnvironmentArranger } from '../../../../Shared/infrastructure/arranger/EnvironmentArranger';
import { UserMother } from './../../domain/UserMother';

const repository: UserRepository = container.get('Auth.Users.domain.UserRepository')
const environmentArranger: Promise<EnvironmentArranger> = container.get('Auth.EnvironmentArranger');

beforeEach(async () => {
  await (await environmentArranger).arrange();
});

afterAll(async () => {
  await (await environmentArranger).arrange();
  await (await environmentArranger).close();
});

describe('UserRepository', () => {
  describe('#save', () => {
    it('should save an user', async () => {
      const user = UserMother.random()

      await repository.save(user);
    }
    )
  })
})
