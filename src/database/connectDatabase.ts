import { connect } from "mongoose";
import { logHandler } from "../utils/logHandler";

export const connectDatabase = async (): Promise<void> => {
  await connect(process.env.MONGO_URI || "", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  logHandler.log("debug", "connected to database!");
};
