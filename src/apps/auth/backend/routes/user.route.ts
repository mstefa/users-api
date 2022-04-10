import { UserPostController } from './../controllers/UserPostController';
import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { body } from 'express-validator';
import { validateReqSchema } from '.';
import { UserLoginController } from '../controllers/UserLoginController';

export const register = (router: Router) => {
    const reqCreateUserSchema = [
        body('id').exists().isUUID(),
        body('user_name').exists().isString(),
        body('password').exists().isString(),
        body('first_name').exists().isString(),
        body('last_name').exists().isString(),
        body('email').exists().isEmail(),
        body('country_id').exists().isString(),
        body('roles').exists().isArray(),
        body('phone_number').exists().isString(),
      ];

    const userPostController: UserPostController = container.get('Apps.auth.controllers.UserPostController');
    router.post('/users', reqCreateUserSchema, validateReqSchema, (req: Request, res: Response) => userPostController.run(req, res));

    const reqLoginUserSchema = [
      body('email').exists().isEmail(),
      body('password').exists().isString(),
    ];

    const userLoginController: UserLoginController = container.get('Apps.auth.controllers.UserLoginController');
    router.post('/users/login', reqLoginUserSchema, (req: Request, res: Response) => userLoginController.run(req, res));

  };
