import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AddComment.css";
import { useDispatch, useSelector } from "react-redux";
import { addNewComment } from "../../features/productRequests/productRequestsSlice";

function AddComment(props) {
  const [newContent, setNewContent] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.user);
  const navigate = useNavigate();
  const charLeft = 250 - newContent.length;

  let isCreatingComment =
    useSelector((state) => state.productRequests.status.addNewComment) ===
    "loading";

  function handleChange(event) {
    const { value } = event.target;
    setNewContent(value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (newContent !== "") {
      await dispatch(
        addNewComment({
          content: newContent,
          user: currentUser,
          postId: props.id,
        })
      );
      setNewContent("");
      navigate(`/feedbackdetail/${props.id}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="AddComment">
      <label htmlFor="comment" className="AddComment__header">
        Add Comment
      </label>
      <textarea
        id="comment"
        name="comment"
        className="AddComment__input"
        placeholder="Type your comment here"
        value={newContent}
        onChange={handleChange}
        maxLength={250}
      ></textarea>
      <div className="AddComment__box">
        <p className="AddComment__char">{charLeft} Characters left</p>
        <button className="AddComment__btn" type="submit">
          {isCreatingComment ? "Sending..." : "Post Comment"}
        </button>
      </div>
    </form>
  );
}

export default AddComment;
