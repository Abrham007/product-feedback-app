import { useState } from "react";
import "./FeedBackPost.css";
import PostComments from "./PostComments";
import ScoreButton from "./ScoreButton";
import Tag from "./Tag";
import { Link } from "react-router-dom";

function FeedBackPost(props) {
  return (
    <Link
      to={`/feedbackdetail/${props._id}`}
      className="FeedBackPost"
      style={{ textDecoration: "none" }}
    >
      <div className="FeedBackPost__score">
        <ScoreButton upvotes={props.upvotes} id={props._id} />
      </div>

      <div className="FeedBackPost__text">
        <h2 className="FeedBackPost__header">{props.title}</h2>
        <p className="FeedBackPost__paragraph">{props.description}</p>
        <Tag text={props.category} />
      </div>
      <div className="FeedBackPost__comments">
        <PostComments
          numOfComments={props.comments ? props.comments.length : 0}
        />
      </div>
    </Link>
  );
}

export default FeedBackPost;
