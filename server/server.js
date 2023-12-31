import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const port = 4000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

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
  id: Number,
  content: String,
  user: userSchema,
  replies: [replaySchema],
});

const requestSchema = new mongoose.Schema({
  id: Number,
  title: String,
  category: String,
  upvotes: Number,
  status: String,
  description: String,
  comments: [commentSchema],
});

const User = mongoose.model("user", userSchema);
const ProductRequest = mongoose.model("request", requestSchema);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/posts", async (req, res) => {
  let posts = await ProductRequest.find();
  res.json(posts);
});

app.get("/user", async (req, res) => {
  let user = await User.find();
  console.log(user);
  res.json(user);
});
// User.find().then((data) => {
//   console.log(data);
// });
// ProductRequest.find().then((data) => {
//   console.log(data);
// });

app.listen(port, () => {
  console.log(`listinig on port ${port}`);
});
