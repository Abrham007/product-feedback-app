import "./TagList.css";
import Tag from "./Tag";
import { useState } from "react";

function TagList(props) {
  const [selectedTag, setSelectedTag] = useState("all");
  const tagList = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  function onTagClick(category) {
    if (category === "all") {
      props.handleSuggestions(props.suggestions);
    } else {
      props.handleSuggestions(
        props.suggestions.filter((req) => req.category === category)
      );
    }
    setSelectedTag(category);
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
