import "./ScoreButton.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseVote } from "../features/productRequests/productRequestsSlice";

function ScoreButton(props) {
  const currentUser = useSelector((state) => state.currentUser.user);
  const voteStatus = useSelector((state) => state.productRequests.status);

  let isClicked = false;
  if (props.usersWhoVoted.includes(currentUser._id)) {
    isClicked = true;
  }

  let isLoading = false;
  if (voteStatus === "loading") {
    isLoading = true;
  }
  const dispatch = useDispatch();

  function handleUpVotes(event) {
    event.preventDefault();
    dispatch(increaseVote({ postId: props.id, curretnUser: currentUser._id }));
  }

  let btnStyles = {};
  let svgStyle = { stroke: "#4661E6" };

  if (isClicked) {
    btnStyles = { backgroundColor: "#4661e6", color: "#fff" };
    svgStyle = { stroke: "#fff" };
  }

  let btnClass = "ScoreButton";
  if (props.inRoadMap) {
    btnClass += " " + "ScoreButton--road-map";
  }

  return (
    <button
      style={{ ...btnStyles, cursor: isLoading ? "progress" : "pointer" }}
      className={btnClass}
      onClick={handleUpVotes}
      disabled={isClicked}
    >
      <svg
        style={svgStyle}
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
