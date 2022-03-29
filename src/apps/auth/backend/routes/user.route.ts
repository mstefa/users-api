import { Router, Request, Response } from 'express';
import container from "../dependency-injection";
import { body } from 'express-validator';
import { validateReqSchema } from '.';

export const register = (router: Router) => {
    const reqSchema = [
        body('id').exists().isUUID(),
        body('user_name').exists().isString(),
        body('password').exists().isString(),
        body('first_name').exists().isString(),
        body('last_name').exists().isString(),
        body('email').exists().isEmail(),
        body('country_id').exists().isString(),
        body('roles').exists().isArray(),
        body('phone_number').exists().isString(),
        body('picture_profiel').exists().isString(),
      ];

    const controller= container.get('Apps.auth.controllers.UserPostController')
    router.post('/users', reqSchema, validateReqSchema, (req: Request, res: Response) => controller.run(req, res));
}