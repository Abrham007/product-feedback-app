import "./TagList.css";
import Tag from "./Tag";
import { useState } from "react";

function TagList(props) {
  // The state that determines who is the active Tag
  const [selectedTag, setSelectedTag] = useState("all");

  // The list of Tag's that are avalible in the database
  const tagList = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  // This funcitons is invocked from the Tag component to
  // determine the active Tag
  function onTagClick(category) {
    // This determines if all the list given applies or only the few
    // in the category passed by the Tag component
    if (category === "all") {
      props.handleSuggestions(props.suggestions);
    } else {
      props.handleSuggestions(
        props.suggestions.filter((req) => req.category === category)
      );
    }

    // Here we set the new active Tag
    setSelectedTag(category);
  }
  return (
    <menu className="TagList">
      {tagList.map((item) => (
        <Tag
          key={item}
          text={item}
          isSelected={selectedTag}
          onClick={onTagClick}
        />
      ))}
    </menu>
  );
}

export default TagList;
