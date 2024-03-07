import { ProductRequest } from "../Models/productRequestModel.js";

export async function getProductRequest(req, res) {
  let posts = await ProductRequest.find();
  res.json(posts);
}

export async function createProductRequest(req, res) {
  let post = new ProductRequest({ ...req.body });
  let newPost = await post.save();
  res.json(newPost);
}

export async function updateProductRequest(req, res) {
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
}

export async function deleteProductRequest(req, res) {
  let id = req.body.postId;
  let deleteInfo = await ProductRequest.deleteOne({ _id: id });
  res.sendStatus(200);
}

export async function updateProductRequestUpvotes(req, res) {
  let post = await ProductRequest.find({ _id: req.body.postId });

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
    res.sendStatus(400);
  }
}

export async function updateProductRequestComments(req, res) {
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
}

export async function updateProductRequestReplay(req, res) {
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
}
