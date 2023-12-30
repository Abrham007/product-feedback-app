import "./RoadMapTabs.css";

function RoadMapTabs(props) {
  return (
    <menu className="RoadMapTabs">
      {props.roadMapData.map((item) => (
        <li key={item[0].status} className="RoadMapTabs__item">
          <button
            style={
              props.selectedStatus === item[0].status
                ? { borderBottom: `4px solid ${item[0].color}` }
                : {}
            }
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
