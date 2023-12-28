import "./TagList.css";
import Tag from "./Tag";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectSuggestionList } from "../features/productRequests/productRequestsSlice";

function TagList(props) {
  const [selectedTag, setSelectedTag] = useState("all");
  const tagList = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  const suggestions = useSelector(selectSuggestionList);

  function onTagClick(category) {
    if (category === "all") {
      props.handleSuggestions(
        suggestions.filter((req) => req.status === "suggestion")
      );
    } else {
      props.handleSuggestions(
        suggestions.filter(
          (req) => req.status === "suggestion" && req.category === category
        )
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
