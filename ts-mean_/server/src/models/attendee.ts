import { Document, model, Schema } from 'mongoose';

import { SessionDTO } from '../models/session';

export interface AttendeeDTO {
  name: string;
  email: string;
  sessions: SessionDTO[];
}

export type AttendeeModel = Document & AttendeeDTO;

const attendeeSchema = new Schema(
  {
    name: { type: String, require: true },
    email: String,
    sessions: [
      {
        name: String,
      },
    ],
  },
  {
    timestamps: true,
    collection: 'attendees',
  },
);

export const Attendee = model<AttendeeModel>('Attendee', attendeeSchema);
export default Attendee;
