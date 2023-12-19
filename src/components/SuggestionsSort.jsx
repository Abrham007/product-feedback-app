import DropMenu from "./DropMenu";
import "./SuggestionsSort.css";

function SuggestionsSort() {
  const sortList = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];
  return (
    <div className="SuggestionsSort">
      <button className="SuggestionsSort__btn">
        <span>Sort by :</span>
        <span className="SuggestionsSort__selected">Most Upvotes</span>
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 1l4 4 4-4"
            stroke="#FFF"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>

      {/* <div className="SuggestionsSort__drop-menu">
        <DropMenu menuList={sortList} activeBtn={0} />
      </div> */}
    </div>
  );
}

export default SuggestionsSort;
