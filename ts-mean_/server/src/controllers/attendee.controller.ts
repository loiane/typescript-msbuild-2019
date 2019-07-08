import { Request, Response } from 'express';

import Attendee, { AttendeeDTO } from '../models/attendee';
import { HttpStatus } from '../util/http-status';
import BaseController from './base.controller';

export default class AttendeeController extends BaseController {

  async findAll(req: Request, res: Response) {
    const records = await Attendee.find();
    return res.status(HttpStatus.SUCCESS).json(records);
  }

  async create(req: Request, res: Response) {
    try {
      const originalRecord = this.getOriginalRecord(req);
      const record = new Attendee(originalRecord);

      const created = await record.save();
      return res.status(HttpStatus.SUCCESS).json(created);
    } catch (err) {
      return this.handleError(err, res);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const originalRecord = this.getOriginalRecord(req);
      const record = await Attendee.findOneAndUpdate({ _id: req.params.id }, originalRecord, {
        new: true,
      });
      return this.checkRecord(record, res);
    } catch (err) {
      return this.handleError(err, res);
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const record = await Attendee.findOneAndRemove({ _id: req.params.id });
      return this.checkRecord(record, res);
    } catch (err) {
      return this.handleError(err, res);
    }
  }

  private getOriginalRecord(req: Request): AttendeeDTO {

    if (!req.body.name) {
      throw new Error('Missing name');
    }

    if (!req.body.email) {
      throw new Error('Missing email');
    }

    if (!req.body.sessions || (req.body.sessions != null && req.body.sessions.length === 0)) {
      throw new Error('Missing sessions');
    }

    return {
      name: req.body.name,
      email: req.body.email,
      sessions: req.body.sessions,
    };
  }
}
