import FeedBackEmpty from "./FeedBackEmpty";
import "./FeedBackList.css";
import FeedBackPost from "./FeedBackPost";

function FeedBackList(props) {
  // checks whether there is a list of suggestions passed by the parent
  let isEmpty = props.listOfFeedback.length === 0;

  return (
    <div
      className={isEmpty ? "FeedBackList FeedBackList--empty" : "FeedBackList"}
    >
      {isEmpty ? (
        <FeedBackEmpty />
      ) : (
        props.listOfFeedback.map((feedback) => (
          <FeedBackPost key={feedback._id} {...feedback} />
        ))
      )}
    </div>
  );
}

export default FeedBackList;
