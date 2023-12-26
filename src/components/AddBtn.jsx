import { Link } from "react-router-dom";
import plusIcon from "../assets/shared/icon-plus.svg";
import "./AddBtn.css";

function AddBtn({ ...props }) {
  return (
    <Link {...props} to={"/add"} className="AddBtn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="12"
        viewBox="0 -960 960 960"
        width="12"
        fill="#F2F4FE"
      >
        <path d="M417-417H166v-126h251v-251h126v251h251v126H543v251H417v-251Z" />
      </svg>
      <span>Add Feedback</span>
    </Link>
  );
}

export default AddBtn;
