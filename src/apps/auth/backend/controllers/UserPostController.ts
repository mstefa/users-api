import { Request, Response } from 'express';
import httpStatus from "http-status";
import { Controller } from "./Controller";

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
      picture_profiel: string;
    };
  };

export class UserPostController implements Controller {
    async run (req: UserPostRequest, res: Response){
        res.status(httpStatus.CREATED).send();
    }
}