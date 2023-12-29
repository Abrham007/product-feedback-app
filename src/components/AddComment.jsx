import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddComment.css";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../features/productRequests/productRequestsSlice";

function AddComment(props) {
  const [newContent, setNewContent] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const navigate = useNavigate();
  const charLeft = 250 - newContent.length;

  function handleChange(event) {
    const { value } = event.target;
    setNewContent(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (newContent) {
      dispatch(
        addComment({
          id: 16,
          content: newContent,
          user: currentUser,
          postId: props,
        })
      );
    }

    setNewContent("");
    navigate(`/feedbackdetail/${props.id}`);
  }

  return (
    <form onSubmit={handleSubmit} className="AddComment">
      <h4 className="AddComment__header">Add Comment</h4>
      <textarea
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
          Post Comment
        </button>
      </div>
    </form>
  );
}

export default AddComment;
