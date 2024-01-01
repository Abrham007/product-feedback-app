import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
// import data from "../data.json" assert { type: "json" };
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
const ProductRequest = mongoose.model("request", requestSchema);
// let user = new User({ ...data.currentUser });
// await user.save();
// await ProductRequest.insertMany(data.productRequests);

// User.find().then((data) => {
//   console.log(data);
// });

// ProductRequest.find().then((data) => {
//   console.log(data);
// });

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/posts", async (req, res) => {
  let posts = await ProductRequest.find();
  res.json(posts);
});

app.post("/post", async (req, res) => {
  let post = new ProductRequest({ ...req.body });
  let newPost = await post.save();
  res.json(newPost);
});

app.patch("/post", async (req, res) => {
  let newPost = req.body;
  let updatedPost = {
    title: newPost.title,
    category: newPost.category,
    status: newPost.status,
    description: newPost.description,
  };
  let fullUpdatedPost = await ProductRequest.findOneAndUpdate(
    { _id: req.body.postId },
    { ...updatedPost },
    { new: true }
  );
  res.json(fullUpdatedPost);
});

app.delete("/post", async (req, res) => {
  let id = req.body.postId;
  let deleteInfo = await ProductRequest.deleteOne({ _id: id });
  res.sendStatus(200);
});

app.get("/user", async (req, res) => {
  let user = await User.find();
  res.json(user);
});

app.listen(port, () => {
  console.log(`listinig on port ${port}`);
});
