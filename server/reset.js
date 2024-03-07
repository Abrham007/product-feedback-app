import { User } from "./Models/userModel.js";
import { ProductRequest } from "./Models/productRequestModel.js";
import data from "../data.json" assert { type: "json" };

let user = new User({ ...data.currentUser });
await user.save();
await ProductRequest.insertMany(data.productRequests);

User.find().then((data) => {
  console.log(data);
});

ProductRequest.find().then((data) => {
  console.log(data);
});

ProductRequest.updateMany({}, { usersWhoVoted: [] }).then((error) => {
  console.log("reseted the list");
});
