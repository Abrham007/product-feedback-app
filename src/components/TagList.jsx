import "./TagList.css";
import Tag from "./Tag";
import { useState } from "react";

function TagList(props) {
  const [selectedTag, setSelectedTag] = useState("all");
  const tagList = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  function onTagClick(category) {
    setSelectedTag(category);
    props.handleClick(category);
  }
  return (
    <div className="TagList">
      {tagList.map((item) => (
        <Tag
          key={item}
          text={item}
          isSelected={selectedTag}
          onClick={onTagClick}
        />
      ))}
    </div>
  );
}

export default TagList;
