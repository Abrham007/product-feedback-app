import "./SuggestionsTab.css";
import suggestionIcon from "../assets/shared/suggestions/icon-suggestions.svg";
import SuggestionsSort from "./SuggestionsSort";

function SuggestionsTab(props) {
  const sortList = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];

  function handleSort(sortIndex) {
    if (sortList[sortIndex] === "Most Upvotes") {
      props.handleSuggestions(
        props.SUGGESTIONLIST.toSorted((a, b) => b.upvotes - a.upvotes)
      );
    } else if (sortList[sortIndex] === "Least Upvotes") {
      props.handleSuggestions(
        props.SUGGESTIONLIST.toSorted((a, b) => a.upvotes - b.upvotes)
      );
    } else if (sortList[sortIndex] === "Most Comments") {
      props.handleSuggestions(
        props.SUGGESTIONLIST.toSorted((a, b) => {
          let AComments = a.comments ? a.comments.length : 0;
          let BComments = b.comments ? b.comments.length : 0;
          return BComments - AComments;
        })
      );
    } else if (sortList[sortIndex] === "Least Comments") {
      props.handleSuggestions(
        props.SUGGESTIONLIST.toSorted((a, b) => {
          let AComments = a.comments ? a.comments.length : 0;
          let BComments = b.comments ? b.comments.length : 0;
          return AComments - BComments;
        })
      );
    }
  }
  return (
    <div className="SuggestionsTab">
      <div className="SuggestionsTab_header">
        <img src={suggestionIcon} alt="" width={24} height={24}></img>
        <h2>{props.numOfSuggestions} Suggestions</h2>
      </div>
      <SuggestionsSort sortList={sortList} handleSort={handleSort} />

      <button className="SuggestionsTab_btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="12"
          viewBox="0 -960 960 960"
          width="12"
          fill="#F2F4FE"
        >
          <path d="M417-417H166v-126h251v-251h126v251h251v126H543v251H417v-251Z" />
        </svg>
        <span>Add Feedback</span>
      </button>
    </div>
  );
}

export default SuggestionsTab;
