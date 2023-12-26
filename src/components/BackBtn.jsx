import "./BackBtn.css";
import { useNavigate } from "react-router-dom";
function BackBtn({ color = "#647196", ...props }) {
  let navigate = useNavigate();
  return (
    <button
      {...props}
      onClick={() => navigate(-1)}
      className="BackBtn"
      style={{ color: color }}
    >
      <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 9L2 5l4-4"
          stroke={color}
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
      <span>Go Back</span>
    </button>
  );
}

export default BackBtn;
