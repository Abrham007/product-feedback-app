import "./FeedBackEmpty.css";
import emptyIcon from "../../assets/suggestions/illustration-empty.svg";

import AddBtn from "../UI/Buttons/AddBtn";
import { useSelector } from "react-redux";

function FeedBackEmpty() {
  const postStatus = useSelector((state) => state.productRequests.status);

  // We set up a loading state for the loading stage
  let isLoading = false;
  if (postStatus === "loading") {
    isLoading = true;
  }

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
        <h2 className="FeedBackEmpty__header">
          {isLoading ? "Fethcing feedback..." : "There is no feedback yet."}
        </h2>
        <p className="FeedBackEmpty__paragraph">
          {isLoading
            ? "This may take a few seconds"
            : "Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app."}
        </p>
      </div>
      <AddBtn />
    </div>
  );
}

export default FeedBackEmpty;
