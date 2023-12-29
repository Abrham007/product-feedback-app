import "./ScoreButton.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { increaseVote } from "../features/productRequests/productRequestsSlice";

function ScoreButton(props) {
  let isClicked = false;
  if (props.upvotes?.isClicked) {
    isClicked = true;
  }
  const dispatch = useDispatch();

  function handleUpVotes(event) {
    dispatch(increaseVote({ id: props.id }));
    event.preventDefault();
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
      <span>{isClicked ? props.upvotes.currentVotes : props.upvotes}</span>
    </button>
  );
}

export default ScoreButton;
