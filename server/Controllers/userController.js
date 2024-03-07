import { User } from "../Models/userModel.js";

export async function getUser(req, res) {
  try {
    let user = await User.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
