import "./FeedBackEmpty.css";
import emptyIcon from "../assets/suggestions/illustration-empty.svg";

import AddBtn from "./AddBtn";

function FeedBackEmpty() {
  return (
    <div className="FeedBackEmpty ">
      <img
        className="FeedBackEmpty__icon"
        src={emptyIcon}
        alt=""
        width={130}
        height={136}
      ></img>
      <div className="FeedBackEmpty__text">
        <h2 className="FeedBackEmpty__header">There is no feedback yet.</h2>
        <p className="FeedBackEmpty__paragraph">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
      </div>
      <AddBtn />
    </div>
  );
}

export default FeedBackEmpty;
