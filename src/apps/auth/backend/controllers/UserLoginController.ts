import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';

type LoginRequest = Request & {
  body:{
    email: string;
    password: string;
  }
}
export class UserLoginController implements Controller {
  constructor() {

  }

  async run(req: LoginRequest, res: Response){
    res.status(httpStatus.ACCEPTED).send();
  }
}
