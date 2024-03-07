import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let conString = process.env.CONNECTION_STRING;

await mongoose.connect(conString);
