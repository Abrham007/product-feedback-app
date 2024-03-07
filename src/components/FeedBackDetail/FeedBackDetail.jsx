import "./FeedBackDetail.css";
import FeedBackPost from "./FeedBackPost";
import CommentList from "../Comments/CommentList";
import AddComment from "../Comments/AddComment";
import { Link, useParams } from "react-router-dom";
import BackBtn from "../UI/Buttons/BackBtn";
import { useSelector } from "react-redux";
function FeedBackDetail() {
  // This is the id we get from either the suggesitons page or
  // the roadmap page
  let { id } = useParams();

  // We filter the post to show the show the post with the specific _id
  const FEEDBACKDETAIL = useSelector((state) =>
    state.productRequests.posts.find((req) => req._id == id)
  );

  // we isolate the comment of that post if it exist or it is undefiend
  const FEEDBACKDETAILCOMMENTS = FEEDBACKDETAIL?.comments;

  return (
    <div className="FeedBackDetail">
      <div className="FeedBackDetail__header">
        <BackBtn />
        <Link to={`/edit/${id}`} className="FeedBackDetail__link">
          Edit Feedback
        </Link>
      </div>
      <FeedBackPost {...FEEDBACKDETAIL} />
      {FEEDBACKDETAILCOMMENTS && (
        <CommentList list={FEEDBACKDETAILCOMMENTS} id={id} />
      )}

      <AddComment id={id} />
    </div>
  );
}

export default FeedBackDetail;
