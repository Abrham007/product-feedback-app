import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { User } from "./Models/userModel.js";
import { ProductRequest } from "./Models/productRequestModel.js";
import userRoute from "./Routes/userRoute.js";
import productRequestRoute from "./Routes/productRequestRoute.js";

// import data from "../data.json" assert { type: "json" };
const app = express();
const port = 4000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

await mongoose.connect("mongodb://0.0.0.0:27017/feedbackDB");

// let user = new User({ ...data.currentUser });
// await user.save();
// await ProductRequest.insertMany(data.productRequests);

// User.find().then((data) => {
//   console.log(data);
// });

// ProductRequest.find().then((data) => {
//   console.log(data);
// });

// ProductRequest.updateMany({}, { usersWhoVoted: [] }).then((error) => {
//   console.log("reseted the list");
// });

// Middleware
app.use(express.json());

app.use("/api", userRoute);
app.use("/api", productRequestRoute);

app.listen(port, () => {
  console.log(`listinig on port ${port}`);
});
