import Button from "./Button";
import "./FeedBackDetail.css";
import FeedBackPost from "./FeedBackPost";
import leftArrowIcon from "../assets/shared/icon-arrow-left.svg";

function FeedBackDetail(props) {
  return (
    <div className="FeedBackDetail">
      <div className="FeedBackDetail__header">
        <Button icon={leftArrowIcon} type={5} />
        <Button type={2} />
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
      <div></div>
    </div>
  );
}

export default FeedBackDetail;
