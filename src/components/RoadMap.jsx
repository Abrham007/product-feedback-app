import "./RoadMap.css";
import BackBtn from "./BackBtn";
import AddBtn from "./AddBtn";
import RoadMapDetail from "./RoadMapDetail";
import RoadMapTabs from "./RoadMapTabs";

function RoadMap(props) {
  let status = ["planned", "in-progress", "live"];

  let roadMapList = status.map((status) => {
    let roadMapItem = props.appData.productRequests.filter(
      (req) => req.status === status
    );
    return roadMapItem;
  });

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
          {roadMapList.map((item) => (
            <RoadMapDetail detailList={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
