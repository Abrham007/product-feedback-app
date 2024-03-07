import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const conString = process.env.CONNECTION_STRING;

await mongoose.connect(conString);
