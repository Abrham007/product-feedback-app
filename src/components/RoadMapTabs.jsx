import "./RoadMapTabs.css";

function RoadMapTabs(props) {
  return (
    <menu className="RoadMapTabs">
      {props.roadMapData.map((item) => (
        <li key={item[0].status} className="RoadMapTabs__item">
          <button
            className="RoadMapTabs__btn"
            onClick={() => props.handleSelectedStatus(item[0].status)}
          >
            {item[0].status} ({item[1].length})
          </button>
        </li>
      ))}
    </menu>
  );
}

export default RoadMapTabs;
