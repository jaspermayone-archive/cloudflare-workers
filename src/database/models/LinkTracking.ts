import { Document, Schema, model } from "mongoose";

export interface LinkTrackingInt extends Document {
  route: string;
  uses: number;
  lastUsed: string;
}

export const LinkTrackingSchema = new Schema({
  route: String,
  uses: Number,
  lastUsed: String,
});

export default model<LinkTrackingInt>("LinkTracking", LinkTrackingSchema);
