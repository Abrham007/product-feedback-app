import "./FeedBackDetail.css";
import FeedBackPost from "./FeedBackPost";
import leftArrowIcon from "../assets/shared/icon-arrow-left.svg";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Link, useParams, useNavigate } from "react-router-dom";

function FeedBackDetail(props) {
  let { id } = useParams();
  let navigate = useNavigate();

  const FEEDBACKDETAIL = props.appData.productRequests.find(
    (req) => req.id == id
  );

  const FEEDBACKDETAILCOMMENTS = FEEDBACKDETAIL?.comments;

  return (
    <div className="FeedBackDetail">
      <div className="FeedBackDetail__header">
        <button
          onClick={() => navigate(-1)}
          className="FeedBackDetail__link FeedBackDetail__link--1"
        >
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 9L2 5l4-4"
              stroke="#647196"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
          <span>Go Back</span>
        </button>
        <Link
          to={`/edit/${id}`}
          className="FeedBackDetail__link FeedBackDetail__link--2"
        >
          Edit Feedback
        </Link>
      </div>
      <FeedBackPost handleAppData={props.handleAppData} {...FEEDBACKDETAIL} />
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
