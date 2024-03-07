import { ProductRequest } from "../Models/productRequestModel.js";

export async function getProductRequest(req, res) {
  try {
    let posts = await ProductRequest.find();
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function createProductRequest(req, res) {
  try {
    let post = new ProductRequest({ ...req.body });
    let newPost = await post.save();
    res.status(200).send(newPost);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function updateProductRequest(req, res) {
  try {
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
    res.status(200).send(fullUpdatedPost);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function deleteProductRequest(req, res) {
  try {
    let id = req.body.postId;
    await ProductRequest.deleteOne({ _id: id });
    res.status(200);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function updateProductRequestUpvotes(req, res) {
  let post = await ProductRequest.find({ _id: req.body.postId });
  try {
    if (!post[0].usersWhoVoted.includes(req.body.curretnUser)) {
      let newUpvotes = post[0].upvotes + 1;
      let newUsersWhoVoted = [...post[0].usersWhoVoted, req.body.curretnUser];
      let fullUpdatedPost = await ProductRequest.findOneAndUpdate(
        { _id: req.body.postId },
        { upvotes: newUpvotes, usersWhoVoted: newUsersWhoVoted },
        { new: true }
      );
      res.status(200).send(fullUpdatedPost);
    } else {
      res.status(400).send("User already voted");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function createProductRequestComments(req, res) {
  try {
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
    res.status(200).send(fullUpdatedPost);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function createProductRequestReplay(req, res) {
  try {
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
    res.status(200).send(fullUpdatedPost);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
