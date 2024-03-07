export async function getUser() {
  const response = await fetch("http://127.0.0.1:4000/api/user");

  if (!response.ok) {
    throw Error("Error when fetching the user");
  }

  const json = await response.json();
  return json;
}

export async function getProductRequest() {
  const response = await fetch("http://127.0.0.1:4000/api/product-request");

  if (!response.ok) {
    throw Error("Error when fetching the product request");
  }

  const json = await response.json();
  return json;
}

export async function postProductRequest(post) {
  const response = await fetch("http://127.0.0.1:4000/api/product-request", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  if (!response.ok) {
    throw Error("Error when creating the product request");
  }

  const json = await response.json();
  return json;
}

export async function patchProductRequest(post) {
  const response = await fetch("http://127.0.0.1:4000/api/product-request", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  if (!response.ok) {
    throw Error("Error when updating the product request");
  }

  const updatedPost = await response.json();
  return { updatedPost, postId: post.postId };
}

export async function deleteProductRequest(postId) {
  const response = await fetch("http://127.0.0.1:4000/api/product-request", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postId),
  });

  if (!response.ok) {
    throw Error("Error when deleting the product request");
  }

  return postId;
}

export async function postProductRequestComment(comment) {
  const response = await fetch(
    "http://127.0.0.1:4000/api/product-request/comment",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    }
  );

  if (!response.ok) {
    throw Error("Error when creating the product request comment");
  }

  const updatedPost = await response.json();
  return { updatedPost, postId: comment.postId };
}

export async function postProductRequestReplay(replay) {
  const response = await fetch(
    "http://127.0.0.1:4000/api/product-request/comment/replay",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(replay),
    }
  );

  if (!response.ok) {
    throw Error("Error when creating the product request replay");
  }

  const updatedPost = await response.json();
  return { updatedPost, postId: replay.postId };
}

export async function patchProductRequestUpvotes(voteInfo) {
  const response = await fetch(
    "http://127.0.0.1:4000/api/product-request/upvotes",
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(voteInfo),
    }
  );

  if (!response.ok) {
    throw Error("Error when updating the product request upvotes");
  }

  const updatedPost = await response.json();
  return { updatedPost, postId: voteInfo.postId };
}
