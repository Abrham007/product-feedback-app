import Button from "./Button";
import "./FeedBackDetail.css";
import FeedBackPost from "./FeedBackPost";
import leftArrowIcon from "../assets/shared/icon-arrow-left.svg";
import CommentList from "./CommentList";

function FeedBackDetail(props) {
  return (
    <div className="FeedBackDetail">
      <div className="FeedBackDetail__header">
        <Button
          text={"Go Back"}
          icon={
            <>
              <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 9L2 5l4-4"
                  stroke="#647196"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </>
          }
          type={5}
        />
        <Button text={"Edit Feedback"} type={2} />
      </div>
      <FeedBackPost
        title={"Add tags for solutions"}
        description={
          "Easier to search for solutions based on a specific stack."
        }
        upvotes={112}
        category={"enhancement"}
        comments={[1, 1]}
      />
      <CommentList />
    </div>
  );
}

export default FeedBackDetail;
