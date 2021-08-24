import { connect } from "mongoose";
import { logHandler } from "../utils/logHandler";

/**
 * This function initialises the database connection.
 */
export const connectDatabase = async (): Promise<void> => {
  await connect(process.env.MONGO_URI || "", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  logHandler.log("debug", "connected to database!");
};
