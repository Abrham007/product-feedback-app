import { Link } from "react-router-dom";
import "./RoadMapView.css";
import RoadMapViewItem from "./RoadMapViewItem";
import { useSelector } from "react-redux";

function RoadMapView() {
  // We get the planned product Request posts from the state
  let plannedNum = useSelector(
    (state) =>
      state.productRequests.posts.filter((req) => req.status === "planned")
        .length
  );

  // We get the in-progress product Request posts from the state
  let inProgressNum = useSelector(
    (state) =>
      state.productRequests.posts.filter((req) => req.status === "in-progress")
        .length
  );

  // We get the live product Request posts from the state
  let liveNum = useSelector(
    (state) =>
      state.productRequests.posts.filter((req) => req.status === "live").length
  );

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
