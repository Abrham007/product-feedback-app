import "./RoadMapViewItem.css";

function RoadMapViewItem(props) {
  return (
    <li className="RoadMapViewItem">
      <span className="RoadMapViewItem__name">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="4" cy="4" r="4" />
        </svg>
        <span>{props.name}</span>
      </span>

      <span className="RoadMapViewItem__number">{props.number}</span>
    </li>
  );
}

export default RoadMapViewItem;
