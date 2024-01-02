import "./FeedBackDetail.css";
import FeedBackPost from "./FeedBackPost";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Link, useParams, redirect, useNavigate } from "react-router-dom";
import BackBtn from "./BackBtn";
import { selectProductRequests } from "../features/productRequests/productRequestsSlice";
import { useSelector } from "react-redux";
function FeedBackDetail() {
  let { id } = useParams();
  let navigate = useNavigate();

  const FEEDBACKDETAIL = useSelector((state) =>
    state.productRequests.posts.find((req) => req._id == id)
  );

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
