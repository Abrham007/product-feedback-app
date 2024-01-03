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
  usersWhoVoted: [mongoose.ObjectId],
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

app.get("/user", async (req, res) => {
  let user = await User.find();
  res.json(user);
});

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

app.post("/post/upvotes", async (req, res) => {
  let post = await ProductRequest.find({ _id: req.body.postId });
  console.log(post[0]);
  if (!post[0].usersWhoVoted.includes(req.body.curretnUser)) {
    let newUpvotes = post[0].upvotes + 1;
    let newUsersWhoVoted = [...post[0].usersWhoVoted, req.body.curretnUser];
    let fullUpdatedPost = await ProductRequest.findOneAndUpdate(
      { _id: req.body.postId },
      { upvotes: newUpvotes, usersWhoVoted: newUsersWhoVoted },
      { new: true }
    );
    res.json(fullUpdatedPost);
  } else {
    res.sendStatus(400).json({ error: "user already voted" });
  }
});

app.post("/post/comment", async (req, res) => {
  let post = await ProductRequest.find({ _id: req.body.postId });
  let postComments = [...post[0].comments];
  postComments.push({
    content: req.body.content,
    user: req.body.user,
  });
  let fullUpdatedPost = await ProductRequest.findOneAndUpdate(
    { _id: req.body.postId },
    { comments: postComments },
    { new: true }
  );
  res.json(fullUpdatedPost);
});

app.post("/post/comment/replay", async (req, res) => {
  let post = await ProductRequest.find({ _id: req.body.postId });
  let postComments = [...post[0].comments];
  let commentIndex = postComments.findIndex(
    (comment) => comment._id == req.body.commentId
  );
  postComments[commentIndex].replies.push({
    content: req.body.content,
    replyingTo: req.body.replyingTo,
    user: req.body.user,
  });
  let fullUpdatedPost = await ProductRequest.findOneAndUpdate(
    { _id: req.body.postId },
    { comments: postComments },
    { new: true }
  );
  res.json(fullUpdatedPost);
});

app.listen(port, () => {
  console.log(`listinig on port ${port}`);
});
