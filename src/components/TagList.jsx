import "./TagList.css";
import Tag from "./Tag";

function TagList() {
  return (
    <div className="TagList">
      <Tag tagName="All" />
      <Tag tagName="UI" />
      <Tag tagName="UX" />
      <Tag tagName="Enhancement" />
      <Tag tagName="Bug" />
      <Tag tagName="Feature" />
    </div>
  );
}

export default TagList;
