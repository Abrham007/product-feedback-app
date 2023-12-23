import FeedBackEmpty from "./FeedBackEmpty";
import "./FeedBackList.css";
import FeedBackPost from "./FeedBackPost";

function FeedBackList(props) {
  let isEmpty = props.listOfFeedback.length === 0;

  return (
    <div
      className={isEmpty ? "FeedBackList FeedBackList--empty" : "FeedBackList"}
    >
      {isEmpty ? (
        <FeedBackEmpty />
      ) : (
        props.listOfFeedback.map((feedback) => (
          <FeedBackPost
            key={feedback.id}
            {...feedback}
            handleAppData={props.handleAppData}
          />
        ))
      )}
    </div>
  );
}

export default FeedBackList;
