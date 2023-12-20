import { useState } from "react";
import DropMenu from "./DropMenu";
import "./SuggestionsSort.css";

function SuggestionsSort(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen((prevValue) => !prevValue);
  }

  function handleSelect(index) {
    setSelectedIndex(index);
    props.handleSort(index);
  }

  return (
    <div className="SuggestionsSort">
      <button onClick={toggleIsOpen} className="SuggestionsSort__btn">
        <span>Sort by :</span>
        <span className="SuggestionsSort__selected">
          {props.sortList[selectedIndex]}
        </span>
        {isOpen ? (
          <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 6l4-4 4 4"
              stroke="#FFF"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        ) : (
          <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1l4 4 4-4"
              stroke="#FFF"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="SuggestionsSort__drop-menu">
          <DropMenu
            menuList={props.sortList}
            btnAction={handleSelect}
            selectedIndex={selectedIndex}
            toggleIsOpen={toggleIsOpen}
          />
        </div>
      )}
    </div>
  );
}

export default SuggestionsSort;
