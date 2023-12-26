import PostComments from "./PostComments";
import "./RoadMapPost.css";
import ScoreButton from "./ScoreButton";
import Tag from "./Tag";

function RoadMapPost(props) {
  return (
    <div className="RoadMapPost">
      <div className="RoadMapPost__header">
        <h3 className="RoadMapPost__heading">
          <span className="RoadMapPost__heading-disc"></span>
          {props.status}
        </h3>
        <h4 className="RoadMapPost__sub-heading">{props.title}</h4>
        <p>{props.description}</p>
      </div>

      <Tag text={props.category} />
      <div className="RoadMapPost__sub-content">
        <ScoreButton score={props.upvotes} inRoadMap={true} />
        <PostComments
          numOfComments={props.comments ? props.comments.length : 0}
        />
      </div>
    </div>
  );
}

export default RoadMapPost;
