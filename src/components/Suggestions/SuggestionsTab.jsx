import "./SuggestionsTab.css";
import suggestionIcon from "../../assets/shared/suggestions/icon-suggestions.svg";
import SuggestionsSort from "./SuggestionsSort";
import AddBtn from "../UI/Buttons/AddBtn";

function SuggestionsTab(props) {
  const sortList = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];

  function handleSort(sortIndex) {
    if (sortList[sortIndex] === "Most Upvotes") {
      props.handleSuggestions([
        ...props.suggestions.sort((a, b) => b.upvotes - a.upvotes),
      ]);
    } else if (sortList[sortIndex] === "Least Upvotes") {
      props.handleSuggestions([
        ...props.suggestions.sort((a, b) => a.upvotes - b.upvotes),
      ]);
    } else if (sortList[sortIndex] === "Most Comments") {
      props.handleSuggestions([
        ...props.suggestions.sort((a, b) => {
          let AComments = a.comments ? a.comments.length : 0;
          let BComments = b.comments ? b.comments.length : 0;
          return BComments - AComments;
        }),
      ]);
    } else if (sortList[sortIndex] === "Least Comments") {
      props.handleSuggestions([
        ...props.suggestions.sort((a, b) => {
          let AComments = a.comments ? a.comments.length : 0;
          let BComments = b.comments ? b.comments.length : 0;
          return AComments - BComments;
        }),
      ]);
    }
  }
  return (
    <div className="SuggestionsTab">
      <div className="SuggestionsTab_header">
        <img src={suggestionIcon} alt="" width={24} height={24}></img>
        <h2>{props.numOfSuggestions} Suggestions</h2>
      </div>
      <SuggestionsSort sortList={sortList} handleSort={handleSort} />
      <AddBtn />
    </div>
  );
}

export default SuggestionsTab;
