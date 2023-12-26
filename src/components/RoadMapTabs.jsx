import "./RoadMapTabs.css";

function RoadMapTabs() {
  return (
    <menu className="RoadMapTabs">
      <li className="RoadMapTabs__item">
        <button className="RoadMapTabs__btn">Planned (2)</button>
      </li>
      <li className="RoadMapTabs__item">
        <button className="RoadMapTabs__btn">In-Progress (3)</button>
      </li>
      <li className="RoadMapTabs__item">
        <button className="RoadMapTabs__btn">Live (1)</button>
      </li>
    </menu>
  );
}

export default RoadMapTabs;
