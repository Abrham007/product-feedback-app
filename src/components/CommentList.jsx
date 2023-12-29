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
            <Fragment key={comment.id}>
              <CommentPost
                key={comment.id}
                feedbackPostId={props.id}
                {...comment}
              />
              <hr key={"line" + comment.id} className="CommentList__line"></hr>
            </Fragment>
          );
        } else {
          let commentReplies = comment.replies?.map((replie, index) => (
            <CommentPost
              key={index}
              feedbackPostId={props.id}
              {...replie}
              parentCommentId={comment.id}
            />
          ));
          return (
            <Fragment key={comment.id}>
              <CommentPostWithReplay
                key={comment.id}
                comment={
                  <CommentPost
                    key={comment.id}
                    feedbackPostId={props.id}
                    {...comment}
                  />
                }
                replies={commentReplies}
              />
              <hr key={"line" + comment.id} className="CommentList__line"></hr>
            </Fragment>
          );
        }
      })}
    </div>
  );
}

export default CommentList;
