import mongoose from "mongoose";
import { userSchema } from "./userModel.js";

const replaySchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  replyingTo: {
    type: String,
    required: true,
  },
  user: userSchema,
});

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  user: userSchema,
  replies: [replaySchema],
});

const requestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  upvotes: Number,
  status: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  comments: [commentSchema],
  usersWhoVoted: {
    type: [mongoose.ObjectId],
    validate: {
      validator: function (v) {
        return !this.includes?.(v);
      },
    },
  },
});

export const ProductRequest = mongoose.model("request", requestSchema);
