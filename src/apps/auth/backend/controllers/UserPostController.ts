import { UserCreator } from './../../../../Contexts/Auth/Users/application/UserCreator';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';

type UserPostRequest = Request & {
  body: {
    id: string;
    user_name: string;
    password: string;
    first_name: string;
    last_name: string;
    email: string;
    country_id: string;
    roles: [string];
    phone_number: string;
  };
};

export class UserPostController implements Controller {

  constructor(private userCreator: UserCreator) { }

  async run(req: UserPostRequest, res: Response) {
    const { id, user_name, password, first_name, last_name, email, roles, country_id,
      phone_number } = req.body;
    try {
        await this.userCreator.run({ id, user_name, password, first_name, last_name, email,
          roles, country_id, phone_number });
        res.status(httpStatus.CREATED).send();
    } catch (e) {
      console.error(e);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }
}
