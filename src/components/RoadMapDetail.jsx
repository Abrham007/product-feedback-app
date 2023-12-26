import "./RoadMapDetail.css";
import RoadMapPost from "./RoadMapPost";

function RoadMapDetail(props) {
  return (
    <div className="RoadMapDetail">
      <div className="RoadMapDetail__header">
        <h3 className="RoadMapDetail__heading">Planned (2)</h3>
        <p className="RoadMapDetail__paragraph">
          Ideas prioritized for research
        </p>
      </div>
      <div className="RoadMapDetail__content">
        {props.detail.map((item) => (
          <RoadMapPost {...item} />
        ))}
      </div>
    </div>
  );
}

export default RoadMapDetail;
