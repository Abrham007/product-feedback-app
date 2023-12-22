import "./AddComment.css";

function AddComment() {
  return (
    <form className="AddComment">
      <h4 className="AddComment__header">Add Comment</h4>
      <textarea
        className="AddComment__input"
        placeholder="Type your comment here"
      ></textarea>
      <div className="AddComment__box">
        <p className="AddComment__char">250 Characters left</p>
        <button className="AddComment__btn">Post Comment</button>
      </div>
    </form>
  );
}

export default AddComment;
