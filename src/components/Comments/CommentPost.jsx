import "./CommentPost.css";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewReplay } from "../../features/productRequests/productRequestsSlice";

function CommentPost(props) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.user);
  let replayTextArea = useRef(null);

  let isCreatingReplay =
    useSelector((state) => state.productRequests.status.addNewReplay) ===
    "loading";

  function toggleReplay() {
    setIsOpen((prevValue) => !prevValue);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (replayTextArea.current.value !== "") {
      await dispatch(
        addNewReplay({
          content: replayTextArea.current.value,
          replyingTo: props.user.username,
          user: currentUser,
          postId: props.feedbackPostId,
          commentId: props.parentCommentId ? props.parentCommentId : props._id,
        })
      );

      replayTextArea.current.value = "";
      setIsOpen(false);
      navigate(`/feedbackdetail/${props.feedbackPostId}`);
    }
  }
  return (
    <div className="CommentPost">
      <img
        className="CommentPost__avatar"
        src={`https://product-feedback-app-6f9b6af9349f.herokuapp.com/${props.user.image}`}
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
            maxLength={250}
          ></textarea>
          <button className="CommentPost__btn-post">
            {isCreatingReplay ? "Sending..." : "Post Reply"}
          </button>
        </form>
      )}
    </div>
  );
}

export default CommentPost;
