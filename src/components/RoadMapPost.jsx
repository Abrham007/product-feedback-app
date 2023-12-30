import { Link } from "react-router-dom";
import PostComments from "./PostComments";
import "./RoadMapPost.css";
import ScoreButton from "./ScoreButton";
import Tag from "./Tag";

function RoadMapPost(props) {
  return (
    <Link
      to={`/feedbackdetail/${props.id}`}
      className="RoadMapPost"
      style={{ borderTop: `6px solid ${props.color}` }}
    >
      <div className="RoadMapPost__header">
        <h3 className="RoadMapPost__heading">
          <span
            className="RoadMapPost__heading-disc"
            style={{ backgroundColor: `${props.color}` }}
          ></span>
          {props.status}
        </h3>
        <h4 className="RoadMapPost__sub-heading">{props.title}</h4>

        <p>{props.description}</p>
      </div>

      <Tag text={props.category} />
      <div className="RoadMapPost__sub-content">
        <ScoreButton upvotes={props.upvotes} id={props.id} inRoadMap={true} />
        <PostComments
          numOfComments={props.comments ? props.comments.length : 0}
        />
      </div>
    </Link>
  );
}

export default RoadMapPost;
