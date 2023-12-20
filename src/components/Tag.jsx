import "./Tag.css";

function Tag(props) {
  let styleObj = {};
  if (props.isSelected === props.text.toLowerCase()) {
    styleObj = { backgroundColor: "#4661e6", color: "#fff" };
  }

  if (!props.onClick) {
    styleObj = { ...styleObj, backgroundColor: "#f2f4ff", cursor: "text" };
  }
  return (
    <button
      className="Tag"
      style={styleObj}
      disabled={!props.onClick}
      onClick={() => props.onClick(props.text.toLowerCase())}
    >
      {props.text}
    </button>
  );
}

export default Tag;
