import "./RoadMapViewItem.css";

function RoadMapViewItem(props) {
  let colors = {
    pink: "#F49F85",
    purple: "#AD1FEA",
    blue: "#62BCFA",
  };
  return (
    <li className="RoadMapViewItem" style={{ listStyleImage: props.color }}>
      <span className="RoadMapViewItem__name">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="4" cy="4" r="4" fill={colors[props.color]} />
        </svg>
        <span>{props.name}</span>
      </span>

      <span className="RoadMapViewItem__number">{props.number}</span>
    </li>
  );
}

export default RoadMapViewItem;
