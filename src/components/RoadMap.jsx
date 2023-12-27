import "./RoadMap.css";
import BackBtn from "./BackBtn";
import AddBtn from "./AddBtn";
import RoadMapDetail from "./RoadMapDetail";
import RoadMapTabs from "./RoadMapTabs";
import { useState } from "react";

function RoadMap(props) {
  const [selectedStatus, setSelectedStatus] = useState("In-Progress");
  const [isMobileDisplay, setIsMobileDispaly] = useState(false);
  let statusData = [
    {
      status: "Planned",
      text: "Ideas prioritized for research",
      color: "#F49F85",
    },
    {
      status: "In-Progress",
      text: "Currently being developed",
      color: "#AD1FEA",
    },
    {
      status: "Live",
      text: "Released features",
      color: "#62BCFA",
    },
  ];

  let roadMapData = statusData.map((item) => {
    let roadMapList = props.appData.productRequests.filter(
      (req) => req.status === item.status.toLowerCase()
    );
    return [item, roadMapList];
  });

  const mediaQuery = window.matchMedia("(max-width: 768px)");

  let roadMapDetailList;

  function handleDisplayChange(query) {
    if (query.matches) {
      let tempRoadMapDetail = roadMapData.find(
        (item) => item[0].status === selectedStatus
      );

      roadMapDetailList = (
        <RoadMapDetail
          detailList={tempRoadMapDetail}
          handleAppData={props.handleAppData}
        />
      );
    } else {
      roadMapDetailList = roadMapData.map((item) => (
        <RoadMapDetail
          key={item[0].status}
          detailList={item}
          handleAppData={props.handleAppData}
        />
      ));
    }
  }

  handleDisplayChange(mediaQuery);

  mediaQuery.addEventListener("change", () => {
    setIsMobileDispaly((prevValue) => !prevValue);
    handleDisplayChange(mediaQuery);
  });

  function handleSelectedStatus(newStatus) {
    setSelectedStatus(newStatus);
  }

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
        <RoadMapTabs
          roadMapData={roadMapData}
          handleSelectedStatus={handleSelectedStatus}
          selectedStatus={selectedStatus}
        />
        <div className="RoadMap__content">{roadMapDetailList}</div>
      </div>
    </div>
  );
}

export default RoadMap;
