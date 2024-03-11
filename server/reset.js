import { User } from "./Models/userModel.js";
import { ProductRequest } from "./Models/productRequestModel.js";
import data from "../data.json" assert { type: "json" };
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const conString = process.env.CONNECTION_STRING;

await mongoose.connect(conString);

async function deleteEverything() {
  try {
    await User.deleteMany();
    await ProductRequest.deleteMany();
    console.log("Successfully deleted everything");
  } catch (error) {
    console.log(`Error deleteing everything. ${error.message}`);
  }
}

async function reset() {
  await deleteEverything();

  try {
    let user = new User({ ...data.currentUser });
    await user.save();
    await ProductRequest.insertMany(data.productRequests);
    await ProductRequest.updateMany({}, { usersWhoVoted: [] });
    console.log("Successfully created the data");
  } catch (error) {
    console.log(`Error creating the data. ${error.message}`);
  }
}

await reset();
