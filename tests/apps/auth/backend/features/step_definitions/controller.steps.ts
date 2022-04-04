import assert from 'assert';
import container from '../../../../../../src/apps/auth/backend/dependency-injection';
import { EnvironmentArranger } from '../../../../../../tests/Contexts/Shared/infrastructure/arranger/EnvironmentArranger'

import { AfterAll, BeforeAll, Given, Then } from 'cucumber';
import request from 'supertest';
import { AuthBackendApp } from '../../../../../../src/apps/auth/backend/AuthBackendApp';

let _request: request.Test;
let application: AuthBackendApp;
let _response: request.Response;
const environmentArranger: Promise<EnvironmentArranger> = container.get('Auth.EnvironmentArranger');


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
