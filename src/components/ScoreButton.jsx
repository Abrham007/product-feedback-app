import "./ScoreButton.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseVote } from "../features/productRequests/productRequestsSlice";

function ScoreButton(props) {
  const currentUser = useSelector((state) => state.currentUser.user);

  let isClicked = false;
  if (props.usersWhoVoted?.includes(currentUser)) {
    isClicked = true;
  }
  const dispatch = useDispatch();

  function handleUpVotes(event) {
    event.preventDefault();
    dispatch(increaseVote({ postId: props.id, curretnUser: currentUser }));
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
      <span>{props.upvotes}</span>
    </button>
  );
}

export default ScoreButton;
