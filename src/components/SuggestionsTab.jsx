import "./SuggestionsTab.css";
import suggestionIcon from "../assets/shared/suggestions/icon-suggestions.svg";
import SuggestionsSort from "./SuggestionsSort";
import Button from "./Button";
import plusIcon from "../assets/shared/icon-plus.svg";

function SuggestionsTab(props) {
  return (
    <div className="SuggestionsTab">
      <div className="SuggestionsTab_header">
        <img src={suggestionIcon} alt="" width={24} height={24}></img>
        <h2>{props.numOfSuggestions} Suggestions</h2>
      </div>
      <SuggestionsSort />
      <Button text="Add Feedback" icon={plusIcon} type={1} />
    </div>
  );
}

export default SuggestionsTab;
