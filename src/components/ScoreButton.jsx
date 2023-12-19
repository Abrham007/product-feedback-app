import "./ScoreButton.css";
import upIcon from "../assets/shared/icon-arrow-up.svg";

function ScoreButton(props) {
  return (
    <button className="ScoreButton">
      <svg
        className="ScoreButton__icon"
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
