import "./RoadMapView.css";
import RoadMapViewItem from "./RoadMapViewItem";

function RoadMapView() {
  return (
    <div className="RoadMapView">
      <div className="RoadMapView__header-box">
        <h2 className="RoadMapView__header">Roadmap</h2>
        <a className="RoadMapView__link" href="#">
          View
        </a>
      </div>

      <ul className="RoadMapView__list">
        <RoadMapViewItem name="Planned" number="2" color="pink" />
        <RoadMapViewItem name="In-Progress" number="3" color="purple" />
        <RoadMapViewItem name="Live" number="1" color="blue" />
      </ul>
    </div>
  );
}

export default RoadMapView;
