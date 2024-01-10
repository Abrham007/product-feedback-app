import "./RoadMap.css";
import BackBtn from "./BackBtn";
import AddBtn from "./AddBtn";
import RoadMapDetail from "./RoadMapDetail";
import RoadMapTabs from "./RoadMapTabs";
import { useState } from "react";
import { selectProductRequests } from "../features/productRequests/productRequestsSlice";
import { useSelector } from "react-redux";

function RoadMap() {
  // This state is responsible for the selected states planned, in-progress or live
  // it is only used for mobile devices
  const [selectedStatus, setSelectedStatus] = useState("");
  const productRequests = useSelector(selectProductRequests);

  // This sets up the color and text used for every status
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

  // This creates the data for the RoadMapDetail component
  let roadMapData = statusData.map((item) => {
    let roadMapList = productRequests.filter(
      (req) => req.status === item.status.toLowerCase()
    );
    return [item, roadMapList];
  });

  // Since we can't use CSS mediaqueries b/c it uses state to determine
  // the current roadMapDetailList showing we use javascript mediaqueries
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  // for desktop and tablet we show all the data
  let roadMapDetailList = roadMapData.map((item) => (
    <RoadMapDetail key={item[0].status} detailList={item} />
  ));

  // for mobile we show one at a time
  if (mediaQuery.matches && selectedStatus !== "") {
    let tempRoadMapDetail = roadMapData.find(
      (item) => item[0].status === selectedStatus
    );

    roadMapDetailList = <RoadMapDetail detailList={tempRoadMapDetail} />;
  }

  // we listin for change in the display
  mediaQuery.addEventListener("change", () => {
    if (mediaQuery.matches) {
      if (selectedStatus === "") {
        setSelectedStatus("In-Progress");
      }
    } else {
      if (selectedStatus !== "") {
        setSelectedStatus("");
      }
    }
  });

  // This is used by the tabpanal for mobile dispaly
  function handleSelectedStatus(newStatus) {
    setSelectedStatus(newStatus);
  }

  return (
    <div className="RoadMap">
      <div className="RoadMap__header">
        <div className="RoadMap__header-box">
          <BackBtn color={"#fff"} stroke={"#CDD2EE"} />
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
