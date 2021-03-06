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
      const expected = UserMother.random()

      await repository.save(expected);
      const user = await repository.search(expected.id)

      expect(expected).toEqual(user);
    }
    )
  })
  describe('#searchByEmail', () => {
    it('return the same user', async () => {
      const expected = UserMother.random()

      await repository.save(expected);
      const user = await repository.searchByEmail(expected.email)

      expect(expected).toEqual(user);
    }
    )
  })
})
