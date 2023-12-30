import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import data from "../data.json";
const app = express();
const port = 4000;

await mongoose.connect("mongodb://0.0.0.0:27017/feedbackDB");

const userSchema = new mongoose.Schema({
  image: String,
  name: String,
  username: String,
});

const replaySchema = new mongoose.Schema({
  content: String,
  replyingTo: String,
  user: userSchema,
});

const commentSchema = new mongoose.Schema({
  content: String,
  user: userSchema,
  replies: [replaySchema],
});

const requestSchema = new mongoose.Schema({
  title: String,
  category: String,
  upvotes: Number,
  status: String,
  description: String,
  comments: [commentSchema],
});

const User = mongoose.model("user", userSchema);
const ProductRequest = mongoose.model("request", replaySchema);

const currentUser = new User(data.currentUser);
currentUser.save();

await ProductRequest.insertMany(data.productRequests);

User.find().then((data) => {
  console.log(data);
});
ProductRequest.find().then((data) => {
  console.log(data);
});

app.listen(port, () => {
  console.log(`listinig on port ${port}`);
});
