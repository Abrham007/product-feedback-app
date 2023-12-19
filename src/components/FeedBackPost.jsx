import "./FeedBackPost.css";
import PostComments from "./PostComments";
import ScoreButton from "./ScoreButton";
import Tag from "./Tag";

function FeedBackPost() {
  return (
    <div className="FeedBackPost">
      <div className="FeedBackPost__score">
        <ScoreButton score={112} />
      </div>

      <div className="FeedBackPost__text">
        <h3 className="FeedBackPost__header">Add tags for solutions</h3>
        <p className="FeedBackPost__paragraph">
          Easier to search for solutions based on a specific stack.
        </p>
        <Tag text="Enhancement" isDisabled={true} />
      </div>
      <div className="FeedBackPost__comments">
        <PostComments numOfComments={2} />
      </div>
    </div>
  );
}

export default FeedBackPost;
