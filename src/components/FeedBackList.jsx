import FeedBackEmpty from "./FeedBackEmpty";
import "./FeedBackList.css";
import FeedBackPost from "./FeedBackPost";

function FeedBackList() {
  return (
    <div className="FeedBackList">
      {/* <FeedBackEmpty /> */}
      <FeedBackPost />
      <FeedBackPost />
      <FeedBackPost />
      <FeedBackPost />
      <FeedBackPost />
    </div>
  );
}

export default FeedBackList;
