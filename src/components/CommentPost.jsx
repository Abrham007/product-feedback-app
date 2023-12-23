import "./CommentPost.css";
import userImg from "../assets/user-images/image-elijah.jpg";
import { useEffect, useState } from "react";

function CommentPost(props) {
  const [isOpen, setIsOpen] = useState(false);
  const userImg = props.user.image.replace(".", "..");

  function toggleReplay() {
    setIsOpen((prevValue) => !prevValue);
  }
  return (
    <div className="CommentPost">
      <img
        className="CommentPost__avatar"
        src="../assets/user-images/image-elijah.jpg"
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
      <p className="CommentPost__description">{props.content}</p>
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
