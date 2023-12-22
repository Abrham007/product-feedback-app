import "./CommentPost.css";
import userImg from "../assets/user-images/image-elijah.jpg";
import { useState } from "react";

function CommentPost() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleReplay() {
    setIsOpen((prevValue) => !prevValue);
  }

  return (
    <div className="CommentPost">
      <img
        className="CommentPost__avatar"
        src={userImg}
        alt=""
        width={40}
        height={40}
      ></img>
      <div className="CommentPost__info">
        <h5 className="CommentPost__name">Elijah Moss</h5>
        <p className="CommentPost__email">@hexagon.bestagon</p>
      </div>
      <button className="CommentPost__btn-get" onClick={toggleReplay}>
        Replay
      </button>
      <p className="CommentPost__description">
        Also, please allow styles to be applied based on system preferences. I
        would love to be able to browse Frontend Mentor in the evening after my
        device’s dark mode turns on without the bright background it currently
        has.
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
