import { Router } from 'express';

import AttendeeController from './controllers/attendee.controller';
import SessionController from './controllers/session.controller';

const router = Router();
const API = `/api/`;

const attendeeAPI = `${API}attendees`;
const attendeeController = new AttendeeController();
router.get(attendeeAPI, attendeeController.findAll);
router.post(attendeeAPI, attendeeController.create);
router.put(`${attendeeAPI}/:id`, attendeeController.update);
router.delete(`${attendeeAPI}/:id`, attendeeController.remove);

const sessionAPI = `${API}sessions`;
const sessionController = new SessionController();
router.get(sessionAPI, sessionController.findAll);

export default router;
