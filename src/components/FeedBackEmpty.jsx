import "./FeedBackEmpty.css";
import emptyIcon from "../assets/suggestions/illustration-empty.svg";
import Button from "./Button";
import plusIcon from "../assets/shared/icon-plus.svg";

function FeedBackEmpty() {
  return (
    <div className="FeedBackEmpty">
      <img src={emptyIcon} alt="" width={130} height={136}></img>
      <div className="FeedBackEmpty__text">
        <h2 className="FeedBackEmpty__header">There is no feedback yet.</h2>
        <p className="FeedBackEmpty__paragraph">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
      </div>
      <Button text="Add Feedback" icon={plusIcon} type={1} />
    </div>
  );
}

export default FeedBackEmpty;
