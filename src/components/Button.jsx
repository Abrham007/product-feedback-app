import "./Button.css";

function Button(props) {
  return (
    <button className={`Button btn-${props.type}`}>
      {props.icon}
      <span>{props.text}</span>
    </button>
  );
}

export default Button;
