import "./FeedBackPost.css";
import PostComments from "./PostComments";
import ScoreButton from "./ScoreButton";
import Tag from "./Tag";

function FeedBackPost(props) {
  return (
    <div className="FeedBackPost">
      <div className="FeedBackPost__score">
        <ScoreButton
          score={props.upvotes}
          id={props.id}
          handleScore={props.handleUpVotes}
        />
      </div>

      <div className="FeedBackPost__text">
        <h3 className="FeedBackPost__header">{props.title}</h3>
        <p className="FeedBackPost__paragraph">{props.description}</p>
        <Tag text={props.category} />
      </div>
      <div className="FeedBackPost__comments">
        <PostComments
          numOfComments={props.comments ? props.comments.length : 0}
        />
      </div>
    </div>
  );
}

export default FeedBackPost;
