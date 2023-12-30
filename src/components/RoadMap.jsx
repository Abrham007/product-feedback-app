import "./RoadMap.css";
import BackBtn from "./BackBtn";
import AddBtn from "./AddBtn";
import RoadMapDetail from "./RoadMapDetail";
import RoadMapTabs from "./RoadMapTabs";
import { useState } from "react";
import { selectProductRequests } from "../features/productRequests/productRequestsSlice";
import { useSelector } from "react-redux";

function RoadMap() {
  const [selectedStatus, setSelectedStatus] = useState("");
  const productRequests = useSelector(selectProductRequests);
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
    let roadMapList = productRequests.filter(
      (req) => req.status === item.status.toLowerCase()
    );
    return [item, roadMapList];
  });

  const mediaQuery = window.matchMedia("(max-width: 768px)");

  let roadMapDetailList = roadMapData.map((item) => (
    <RoadMapDetail key={item[0].status} detailList={item} />
  ));

  if (mediaQuery.matches && selectedStatus !== "") {
    let tempRoadMapDetail = roadMapData.find(
      (item) => item[0].status === selectedStatus
    );

    roadMapDetailList = <RoadMapDetail detailList={tempRoadMapDetail} />;
  }

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
