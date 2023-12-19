import "./Button.css";

function Button(props) {
  return (
    <button className={`Button btn-${props.type}`}>
      <img src={props.icon} alt="" width={9} height={9}></img>
      <span>{props.text}</span>
    </button>
  );
}

export default Button;
