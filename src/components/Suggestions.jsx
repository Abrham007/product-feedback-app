import "./Suggestions.css";
import { useState } from "react";
import CompanyName from "./CompanyName";
import TagList from "./TagList";
import RoadMapView from "./RoadMapView";
import SuggestionsTab from "./SuggestionsTab";
import FeedBackList from "./FeedBackList";

function Suggestions(props) {
  const SUGGESTIONLIST = props.appData.productRequests.filter(
    (req) => req.status === "suggestion"
  );
  const [suggestionList, setSuggestionList] = useState(SUGGESTIONLIST);
  const [isOpen, setIsOpen] = useState(false);

  function handleSuggestions(currentSuggestions) {
    setSuggestionList(currentSuggestions);
  }

  return (
    <div className="Suggestions">
      <div
        className="Suggestions__board"
        style={isOpen ? { visibility: "visible" } : {}}
      >
        <CompanyName isOpen={isOpen} setIsOpen={setIsOpen} />
        <TagList
          SUGGESTIONLIST={SUGGESTIONLIST}
          handleSuggestions={handleSuggestions}
        />
        <RoadMapView appData={props.appData} />
      </div>
      <div className="Suggestions__content">
        <SuggestionsTab
          numOfSuggestions={suggestionList.length}
          SUGGESTIONLIST={SUGGESTIONLIST}
          handleSuggestions={handleSuggestions}
        />
        <FeedBackList
          listOfFeedback={suggestionList}
          handleAppData={props.handleAppData}
        />
      </div>
    </div>
  );
}

export default Suggestions;
