import { UserId } from './../../../../../../src/Contexts/Auth/Shared/domain/Users/UserId';
import assert from 'assert';
import container from '../../../../../../src/apps/auth/backend/dependency-injection';
import { EnvironmentArranger } from '../../../../../../tests/Contexts/Shared/infrastructure/arranger/EnvironmentArranger'

import { AfterAll, BeforeAll, Given, Then } from 'cucumber';
import request from 'supertest';
import { AuthBackendApp } from '../../../../../../src/apps/auth/backend/AuthBackendApp';
import { UserRepository } from '../../../../../../src/Contexts/Auth/Users/domain/UserRepository';

let _request: request.Test;
let application: AuthBackendApp;
let _response: request.Response;
const environmentArranger: Promise<EnvironmentArranger> = container.get('Auth.EnvironmentArranger');
const userRepository: UserRepository = container.get('Auth.Users.domain.UserRepository')


Given('I send a GET request to {string}', (route: string) => {
  _request = request(application.httpServer).get(route);
});

Given('I send a PUT request to {string} with body:', (route: string, body: string) => {
  _request = request(application.httpServer).put(route).send(JSON.parse(body));
});

Given('I send a POST request to {string} with body:', (route: string, body: string) => {
  _request = request(application.httpServer).post(route).send(JSON.parse(body));
});

Then('the response status code should be {int}', async (status: number) => {
  _response = await _request.expect(status);
});

Then('the response should be empty', () => {
  assert.deepStrictEqual(_response.body, {});
});

Then('the user should be save in the db with {string}', async (idValue: string) => {
  const id = new UserId(idValue);
  const user = await userRepository.search(id);
  let returnedId = user?.id.value
  assert.equal(returnedId, id);
})


BeforeAll(async () => {
  application = new AuthBackendApp();
  await application.start();
  await (await environmentArranger).arrange();
});

AfterAll(async () => {
  await (await environmentArranger).arrange();
  await (await environmentArranger).close();
  await application.stop();
});
