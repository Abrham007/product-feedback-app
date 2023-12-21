import "./FeedBackEmpty.css";
import emptyIcon from "../assets/suggestions/illustration-empty.svg";
import Button from "./Button";
import plusIcon from "../assets/shared/icon-plus.svg";

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
      <Button
        text="Add Feedback"
        icon={
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12"
              viewBox="0 -960 960 960"
              width="12"
              fill="#F2F4FE"
            >
              <path d="M417-417H166v-126h251v-251h126v251h251v126H543v251H417v-251Z" />
            </svg>
          </>
        }
        type={1}
      />
    </div>
  );
}

export default FeedBackEmpty;
