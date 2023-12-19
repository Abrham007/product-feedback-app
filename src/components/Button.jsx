import "./Button.css";

function Button(props) {
  return (
    <button className={`Button btn-${props.type}`}>
      <img src={props.icon} alt=""></img>
      <span>{props.text}</span>
    </button>
  );
}

export default Button;
