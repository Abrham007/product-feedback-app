import "./ScoreButton.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { increaseVote } from "../features/productRequests/productRequestsSlice";

function ScoreButton(props) {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();

  function handleUpVotes(event) {
    dispatch(increaseVote({ id: props.id }));
    setIsClicked(true);
    event.preventDefault();

    // props.handleAppData((prevValue) => {
    //   let changedIndex = prevValue.productRequests.findIndex(
    //     (req) => req.id === props.id
    //   );
    //   let tempValue = { ...prevValue };
    //   tempValue.productRequests[changedIndex].upvotes++;
    //   return tempValue;
    // });
  }

  let btnStyles = {};
  if (isClicked) {
    btnStyles = { backgroundColor: "#4661e6", color: "#fff" };
  }

  let btnClass = "ScoreButton";
  if (props.inRoadMap) {
    btnClass += " " + "ScoreButton--road-map";
  }

  return (
    <button
      style={btnStyles}
      className={btnClass}
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
      <span>{props.score}</span>
    </button>
  );
}

export default ScoreButton;
