import { Document, model, Schema } from 'mongoose';

export interface SessionDTO {
  name: string;
}

export type SessionModel = Document & SessionDTO;

const sessionSchema = new Schema(
  {
    name: { type: String, require: true },
  },
  {
    collection: 'sessions',
  },
);

export const Session = model<SessionModel>('Session', sessionSchema);
export default Session;
