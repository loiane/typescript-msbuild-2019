import { Request, Response } from 'express';

import Session from '../models/session';
import { HttpStatus } from '../util/http-status';

export default class SessionController {
  async findAll(req: Request, res: Response) {
    const records = await Session.find();
    return res.status(HttpStatus.SUCCESS).json(records);
  }
}
