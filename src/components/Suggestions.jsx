import "./Suggestions.css";
import CompanyName from "./CompanyName";
import TagList from "./TagList";
import RoadMapView from "./RoadMapView";
import SuggestionsTab from "./SuggestionsTab";
import FeedBackList from "./FeedBackList";

function Suggestions(props) {
  return (
    <div className="Suggestions">
      <div className="Suggestions__board">
        <CompanyName />
        <TagList
          SUGGESTIONLIST={props.SUGGESTIONLIST}
          handleSuggestions={props.handleSuggestions}
        />
        <RoadMapView appData={props.appData} />
      </div>
      <div className="Suggestions__content">
        <SuggestionsTab
          numOfSuggestions={props.suggestionList.length}
          SUGGESTIONLIST={props.SUGGESTIONLIST}
          handleSuggestions={props.handleSuggestions}
        />
        <FeedBackList listOfFeedback={props.suggestionList} />
      </div>
    </div>
  );
}

export default Suggestions;
