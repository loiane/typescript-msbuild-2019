import { Response } from 'express';

import { HttpStatus } from '../util/http-status';

export default abstract class BaseController {

  protected checkRecord(record: any,  res: Response) {
    if (!record) {
      return res.status(HttpStatus.NOT_FOUND).send('Not found');
    }
    return res.status(HttpStatus.SUCCESS).json(record);
  }

  protected handleError(err: any, res: Response) {
    return res.status(HttpStatus.ERROR).send(err);
  }
}
