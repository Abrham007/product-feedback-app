import "./FeedBackDetail.css";
import FeedBackPost from "./FeedBackPost";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Link, useParams } from "react-router-dom";
import BackBtn from "./BackBtn";
import { selectProductRequests } from "../features/productRequests/productRequestsSlice";
import { useSelector } from "react-redux";
function FeedBackDetail(props) {
  const productRequests = useSelector(selectProductRequests);
  let { id } = useParams();

  const FEEDBACKDETAIL = productRequests.find((req) => req.id == id);

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
        <CommentList
          list={FEEDBACKDETAILCOMMENTS}
          handleAppData={props.handleAppData}
          id={id}
        />
      )}

      <AddComment id={id} handleAppData={props.handleAppData} />
    </div>
  );
}

export default FeedBackDetail;
