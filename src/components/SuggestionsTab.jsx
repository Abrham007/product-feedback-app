import "./SuggestionsTab.css";
import suggestionIcon from "../assets/shared/suggestions/icon-suggestions.svg";

function SuggestionsTab() {
  return (
    <div className="SuggestionsTab">
      <div className="SuggestionsTab_header">
        <img src={suggestionIcon}></img>
        <h2>2 Suggestions</h2>
      </div>
      <div></div>
      <button></button>
    </div>
  );
}

export default SuggestionsTab;
