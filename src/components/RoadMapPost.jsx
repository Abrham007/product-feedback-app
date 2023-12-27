import { Link } from "react-router-dom";
import PostComments from "./PostComments";
import "./RoadMapPost.css";
import ScoreButton from "./ScoreButton";
import Tag from "./Tag";

function RoadMapPost(props) {
  return (
    <div
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
        <h4>
          <Link
            className="RoadMapPost__sub-heading"
            to={`/feedbackdetail/${props.id}`}
          >
            {props.title}
          </Link>
        </h4>

        <p>{props.description}</p>
      </div>

      <Tag text={props.category} />
      <div className="RoadMapPost__sub-content">
        <ScoreButton
          score={props.upvotes}
          id={props.id}
          handleAppData={props.handleAppData}
          inRoadMap={true}
        />
        <PostComments
          numOfComments={props.comments ? props.comments.length : 0}
        />
      </div>
    </div>
  );
}

export default RoadMapPost;
