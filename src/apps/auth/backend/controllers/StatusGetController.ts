import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Log } from '../../../../Contexts/Shared/infrastructure/logger/winston/winstonLogger';
import { Controller } from './Controller';

export default class StatusGetController implements Controller {
  async run(req: Request, res: Response) {
    Log.info('status')
    Log.warn('statuswarn')
    Log.error('statuserror')
    res.status(httpStatus.OK).send();
  }
}
