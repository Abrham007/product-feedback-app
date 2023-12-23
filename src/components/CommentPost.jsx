import "./CommentPost.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function CommentPost(props) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  let replayTextArea = useRef(null);
  const userImgs = new URL(props.user.image.replace(".", ".."), import.meta.url)
    .href;

  function toggleReplay() {
    setIsOpen((prevValue) => !prevValue);
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.handleAppData((prevVaule) => {
      let feedBackPostIndex = prevVaule.productRequests.findIndex(
        (req) => req.id == props.feedbackPostId
      );
      let commentsArray = prevVaule.productRequests[feedBackPostIndex].comments;
      let commentIndex = commentsArray.findIndex(
        (comment) => comment.id == props.id
      );
      commentsArray[commentIndex].replies = {
        contnet: replayTextArea.value,
        replyingTo: props.user.username,
        user: prevVaule.currentUser,
      };
      return prevVaule;
    });

    navigate(`/feedbackdetail/${props.feedbackPostId}`);
  }
  return (
    <div className="CommentPost">
      <img
        className="CommentPost__avatar"
        src={userImgs}
        alt=""
        width={40}
        height={40}
      ></img>
      <div className="CommentPost__info">
        <h5 className="CommentPost__name">{props.user.name}</h5>
        <p className="CommentPost__username">@{props.user.username}</p>
      </div>
      <button className="CommentPost__btn-get" onClick={toggleReplay}>
        Replay
      </button>
      <p className="CommentPost__description">
        <span className="CommentPost__replayto">
          {props.replyingTo ? `@${props.replyingTo} ` : null}
        </span>
        {props.content}
      </p>
      {isOpen && (
        <form onSubmit={handleSubmit} className="CommentPost__replay">
          <textarea
            ref={replayTextArea}
            className="CommentPost__input"
          ></textarea>
          <button className="CommentPost__btn-post" type="submit">
            Post Reply
          </button>
        </form>
      )}
    </div>
  );
}

export default CommentPost;
