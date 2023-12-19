import "./Tag.css";

function Tag(props) {
  return (
    <button
      className="Tag"
      style={
        props.isDisabled ? { backgroundColor: "#f2f4ff", cursor: "text" } : {}
      }
      disabled={!!props.isDisabled}
    >
      {props.text}
    </button>
  );
}

export default Tag;
