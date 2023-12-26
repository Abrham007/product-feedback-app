import "./RoadMap.css";
import BackBtn from "./BackBtn";
import AddBtn from "./AddBtn";
import RoadMapDetail from "./RoadMapDetail";
import RoadMapTabs from "./RoadMapTabs";

function RoadMap() {
  return (
    <div className="RoadMap">
      <div className="RoadMap__header">
        <div className="RoadMap__header-box">
          <BackBtn color={"#fff"} />
          <h2 className="RoadMap__heading">Roadmap</h2>
        </div>
        <AddBtn />
      </div>
      <div className="RoadMap__tab-content">
        <RoadMapTabs />
        <div className="RoadMap__content">
          <RoadMapDetail />
          <RoadMapDetail />
          <RoadMapDetail />
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
