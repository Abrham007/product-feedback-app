import "./Suggestions.css";
import { useEffect, useState } from "react";
import CompanyName from "./CompanyName";
import TagList from "./TagList";
import RoadMapView from "./RoadMapView";
import SuggestionsTab from "./SuggestionsTab";
import FeedBackList from "./FeedBackList";
import { useSelector } from "react-redux";
import { selectSuggestionList } from "../features/productRequests/productRequestsSlice";

function Suggestions() {
  // we get the suggestions list from the productReqests posts list
  const suggestions = useSelector(selectSuggestionList);

  // we set it as state for filtering by the sort btn and tag btn
  const [suggestionList, setSuggestionList] = useState(suggestions);
  const [isOpen, setIsOpen] = useState(false);

  // we send this functions to the taglist and suggestions tab for filtering
  function handleSuggestions(currentSuggestions) {
    setSuggestionList(currentSuggestions);
  }

  // since the suggestions variable changes when we update the redux
  // we have to update our state when that happens
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
