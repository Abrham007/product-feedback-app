import "./FeedBackDetail.css";
import FeedBackPost from "./FeedBackPost";
import leftArrowIcon from "../assets/shared/icon-arrow-left.svg";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { useParams } from "react-router-dom";

function FeedBackDetail(props) {
  let { id } = useParams();
  console.log(id);
  const FEEDBACKDETAIL = props.appData.productRequests.find(
    (req) => req.id == id
  );
  console.log(FEEDBACKDETAIL);
  const FEEDBACKDETAILCOMMENTS = FEEDBACKDETAIL.comments;

  return (
    <div className="FeedBackDetail">
      <div className="FeedBackDetail__header">
        <button className="FeedBackDetail__btn FeedBackDetail__btn--1">
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
        <button className="FeedBackDetail__btn FeedBackDetail__btn--2">
          <span>Edit Feedback</span>
        </button>
      </div>
      <FeedBackPost {...FEEDBACKDETAIL} />
      <CommentList list={FEEDBACKDETAILCOMMENTS} />
      <AddComment />
    </div>
  );
}

export default FeedBackDetail;
