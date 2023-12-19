import "./SuggestionsSort.css";

function SuggestionsSort() {
  return (
    <button className="SuggestionsSort">
      <span>Sort by :</span>
      <span className="SuggestionsSort__selected">Most Upvotes</span>
      <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1l4 4 4-4"
          stroke="#FFF"
          stroke-width="2"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </button>
  );
}

export default SuggestionsSort;
