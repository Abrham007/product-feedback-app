import "./RoadMapDetail.css";
import RoadMapPost from "./RoadMapPost";
import RoadMapTabs from "./RoadMapTabs";

function RoadMapDetail(props) {
  return (
    <div className="RoadMapDetail">
      <div className="RoadMapDetail__header">
        <h3 className="RoadMapDetail__heading">
          {props.detailList[0].status} ({props.detailList[1].length})
        </h3>
        <p className="RoadMapDetail__paragraph">{props.detailList[0].text}</p>
      </div>
      <div className="RoadMapDetail__content">
        {props.detailList[1].map((item) => (
          <RoadMapPost
            key={item.id}
            {...item}
            color={props.detailList[0].color}
            handleAppData={props.handleAppData}
          />
        ))}
      </div>
    </div>
  );
}

export default RoadMapDetail;
