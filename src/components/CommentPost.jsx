import "./CommentPost.css";
import { useState } from "react";

function CommentPost(props) {
  const [isOpen, setIsOpen] = useState(false);
  const userImgs = new URL(props.user.image.replace(".", ".."), import.meta.url)
    .href;

  function toggleReplay() {
    setIsOpen((prevValue) => !prevValue);
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
        <div className="CommentPost__replay">
          <textarea className="CommentPost__input"></textarea>
          <button className="CommentPost__btn-post">Post Reply</button>
        </div>
      )}
    </div>
  );
}

export default CommentPost;
