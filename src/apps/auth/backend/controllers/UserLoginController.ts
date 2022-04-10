import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { LoginCreator } from '../../../../Contexts/Auth/Users/application/LoginCreator';
import { Controller } from './Controller';

type LoginRequest = Request & {
  body:{
    email: string;
    password: string;
  }
}
export class UserLoginController implements Controller {
  constructor(private loginCreator: LoginCreator) {

  }

  async run(req: LoginRequest, res: Response){
    const { email, password} = req.body;
    try {
      const response = await this.loginCreator.run({email, password})
      res.status(httpStatus.ACCEPTED).send(response);
    }
    catch(e){
      console.log(e)
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();

    }
  }
}
