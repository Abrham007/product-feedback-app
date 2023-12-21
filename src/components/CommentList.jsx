import "./CommentList.css";
import CommentPost from "./CommentPost";
import CommentPostWithReplay from "./CommentPostWithReplay";

function CommentList() {
  return (
    <div className="CommentList">
      <h4 className="CommentList__header">4 Comments</h4>
      <CommentPost />
      <hr className="CommentList__line"></hr>
      <CommentPostWithReplay
        comment={<CommentPost />}
        replies={
          <>
            <CommentPost />
            <CommentPost />
          </>
        }
      />
    </div>
  );
}

export default CommentList;
