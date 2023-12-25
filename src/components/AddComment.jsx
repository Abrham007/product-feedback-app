import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddComment.css";

function AddComment(props) {
  const [newContent, setNewContent] = useState("");
  const navigate = useNavigate();
  const charLeft = 250 - newContent.length;

  function handleChange(event) {
    const { value } = event.target;
    setNewContent(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.handleAppData((prevVaule) => {
      let newComment = {
        id: 16,
        content: newContent,
        user: prevVaule.currentUser,
      };
      let feedBackPostIndex = prevVaule.productRequests.findIndex(
        (req) => req.id == props.id
      );
      let productObj = prevVaule.productRequests[feedBackPostIndex];
      if (productObj.comments) {
        productObj.comments.push(newComment);
      } else {
        productObj.comments = [newComment];
      }
      return prevVaule;
    });

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
