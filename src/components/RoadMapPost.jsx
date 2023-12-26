import PostComments from "./PostComments";
import "./RoadMapPost.css";
import ScoreButton from "./ScoreButton";
import Tag from "./Tag";

function RoadMapPost() {
  return (
    <div className="RoadMapPost">
      <div className="RoadMapPost__header">
        <h3 className="RoadMapPost__heading">
          <span className="RoadMapPost__heading-disc"></span>Planned
        </h3>
        <h4 className="RoadMapPost__sub-heading">More comprehensive reports</h4>
        <p>It would be great to see a more detailed breakdown of solutions.</p>
      </div>

      <Tag text={"Feature"} />
      <div className="RoadMapPost__sub-content">
        <ScoreButton score={123} inRoadMap={true} />
        <PostComments numOfComments={2} />
      </div>
    </div>
  );
}

export default RoadMapPost;
