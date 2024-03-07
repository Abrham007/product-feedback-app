import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("user", userSchema);
