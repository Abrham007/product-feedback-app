import { Fragment } from "react";
import "./CommentList.css";
import CommentPost from "./CommentPost";
import CommentPostWithReplay from "./CommentPostWithReplay";

function CommentList(props) {
  return (
    <div className="CommentList">
      <h4 className="CommentList__header">{props.list.length} Comments</h4>
      {props.list?.map((comment) => {
        if (!comment.replies) {
          return (
            <Fragment key={comment._id}>
              <CommentPost
                key={comment._id}
                feedbackPostId={props.id}
                {...comment}
              />
              <hr key={"line" + comment._id} className="CommentList__line"></hr>
            </Fragment>
          );
        } else {
          let commentReplies = comment.replies?.map((replie, index) => (
            <CommentPost
              key={index}
              feedbackPostId={props.id}
              {...replie}
              parentCommentId={comment._id}
            />
          ));
          return (
            <Fragment key={comment._id}>
              <CommentPostWithReplay
                key={comment._id}
                comment={
                  <CommentPost
                    key={comment._id}
                    feedbackPostId={props.id}
                    {...comment}
                  />
                }
                replies={commentReplies}
              />
              <hr key={"line" + comment._id} className="CommentList__line"></hr>
            </Fragment>
          );
        }
      })}
    </div>
  );
}

export default CommentList;
