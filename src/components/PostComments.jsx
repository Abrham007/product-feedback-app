import "./PostComments.css";
import commentIcon from "../assets/shared/icon-comments.svg";

function PostComments(props) {
  return (
    <div className="PostComments">
      <img src={commentIcon} alt="" width={18} height={16}></img>
      <p style={props.numOfComments === 0 ? { opacity: "0.5" } : {}}>
        {props.numOfComments}
      </p>
    </div>
  );
}

export default PostComments;
