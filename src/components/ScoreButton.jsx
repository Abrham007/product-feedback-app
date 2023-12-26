import "./ScoreButton.css";
import { useState } from "react";

function ScoreButton(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleUpVotes(event) {
    setIsClicked(true);
    event.preventDefault();
    props.handleAppData((prevValue) => {
      let changedIndex = prevValue.productRequests.findIndex(
        (req) => req.id === props.id
      );
      prevValue.productRequests[changedIndex].upvotes++;
      return prevValue;
    });
  }

  function handleClick(event) {
    setIsClicked(true);
    props.handleScore(props.id);
    event.stopPropagation();
  }
  let btnStyles = {};
  if (isClicked) {
    btnStyles = { ...btnStyles, backgroundColor: "#4661e6", color: "#fff" };
  } else {
    btnStyles = { ...btnStyles };
  }

  if (props.inRoadMap) {
    btnStyles = {
      ...btnStyles,
      width: "69px",
      height: "40px",
      flexDirection: "row",
    };
  } else {
    btnStyles = { ...btnStyles };
  }

  return (
    <button
      style={btnStyles}
      className="ScoreButton"
      onClick={handleUpVotes}
      disabled={isClicked}
    >
      <svg
        style={{ stroke: isClicked ? "#fff" : "#4661E6" }}
        stroke="#4661E6"
        width="10"
        height="7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 6l4-4 4 4" strokeWidth="2" fill="none" fillRule="evenodd" />
      </svg>
      <span>{isClicked ? props.score + 1 : props.score}</span>
    </button>
  );
}

export default ScoreButton;
