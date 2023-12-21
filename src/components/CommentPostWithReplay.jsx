import "./CommentPostWithReplay.css";

function CommentPostWithReplay({ comment, replies }) {
  return (
    <div className="CommentPostWithReplay">
      <hr className="CommentPostWithReplay__line"></hr>
      <div className="CommentPostWithReplay__comment">{comment}</div>
      <div className="CommentPostWithReplay__replies">{replies}</div>
    </div>
  );
}

export default CommentPostWithReplay;
