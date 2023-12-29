import "./Suggestions.css";
import { useEffect, useState } from "react";
import CompanyName from "./CompanyName";
import TagList from "./TagList";
import RoadMapView from "./RoadMapView";
import SuggestionsTab from "./SuggestionsTab";
import FeedBackList from "./FeedBackList";
import { useSelector } from "react-redux";
import { selectSuggestionList } from "../features/productRequests/productRequestsSlice";

function Suggestions(props) {
  const suggestions = useSelector(selectSuggestionList);

  const [suggestionList, setSuggestionList] = useState(suggestions);
  const [isOpen, setIsOpen] = useState(false);

  function handleSuggestions(currentSuggestions) {
    setSuggestionList(currentSuggestions);
  }

  useEffect(() => {
    handleSuggestions(suggestions);
  }, [suggestions]);

  return (
    <div className="Suggestions">
      <div
        className="Suggestions__board"
        style={isOpen ? { visibility: "visible" } : {}}
      >
        <CompanyName isOpen={isOpen} setIsOpen={setIsOpen} />
        <TagList
          handleSuggestions={handleSuggestions}
          suggestions={suggestions}
        />
        <RoadMapView />
      </div>
      <div className="Suggestions__content">
        <SuggestionsTab
          numOfSuggestions={suggestionList.length}
          handleSuggestions={handleSuggestions}
          suggestions={suggestions}
        />
        <FeedBackList listOfFeedback={suggestionList} />
      </div>
    </div>
  );
}

export default Suggestions;
