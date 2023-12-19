import "./TagList.css";
import Tag from "./Tag";

function TagList() {
  return (
    <div className="TagList">
      <Tag text="All" />
      <Tag text="UI" />
      <Tag text="UX" />
      <Tag text="Enhancement" />
      <Tag text="Bug" />
      <Tag text="Feature" />
    </div>
  );
}

export default TagList;
