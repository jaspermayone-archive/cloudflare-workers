import { connect } from "mongoose";
import { logHandler } from "../utils/logHandler";

/**
 * This function initialises the database connection.
 */
export const connectDatabase = async (): Promise<void> => {
  await connect(process.env.MONGO_URI || "");
  logHandler.log("debug", "connected to database!");
};
