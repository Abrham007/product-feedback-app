import { User } from "../Models/userModel.js";

export async function getUser(req, res) {
  let user = await User.find();
  res.json(user);
}
