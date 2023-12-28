import { Link } from "react-router-dom";
import "./RoadMapView.css";
import RoadMapViewItem from "./RoadMapViewItem";

function RoadMapView(props) {
  let plannedNum = props.appData.productRequests.filter(
    (req) => req.status === "planned"
  ).length;

  let inProgressNum = props.appData.productRequests.filter(
    (req) => req.status === "in-progress"
  ).length;

  let liveNum = props.appData.productRequests.filter(
    (req) => req.status === "live"
  ).length;

  return (
    <div className="RoadMapView">
      <div className="RoadMapView__header-box">
        <h2 className="RoadMapView__header">Roadmap</h2>
        <Link to={"/roadmap"} className="RoadMapView__link">
          View
        </Link>
      </div>

      <ul className="RoadMapView__list">
        <RoadMapViewItem name="Planned" number={plannedNum} />
        <RoadMapViewItem name="In-Progress" number={inProgressNum} />
        <RoadMapViewItem name="Live" number={liveNum} />
      </ul>
    </div>
  );
}

export default RoadMapView;
