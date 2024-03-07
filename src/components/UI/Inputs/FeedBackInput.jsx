import "./FeedBackInput.css";
import FormSelect from "./FormSelect";

function FeedBackInput(props) {
  let input;
  if (props.type === "text") {
    input = (
      <input
        className="FeedBackInput__input"
        id={props.name}
        name={props.name}
        {...props.register(props.name, { required: true })}
        style={props.errors[props.name] ? { border: "1px solid #D73737" } : {}}
        defaultValue={props.defaultValue}
      ></input>
    );
  } else if (props.type === "text-area") {
    input = (
      <textarea
        className="FeedBackInput__input FeedBackInput__input--text-area"
        id={props.name}
        name={props.name}
        {...props.register(props.name, { required: true })}
        style={props.errors[props.name] ? { border: "1px solid #D73737" } : {}}
        defaultValue={props.defaultValue}
      ></textarea>
    );
  } else if (props.type === "select") {
    input = (
      <FormSelect
        selectList={props.selectList}
        handleCurrent={props.handleCurrent}
        selectedIndex={props.selectedIndex}
      />
    );
  }
  return (
    <div className="FeedBackInput">
      <label
        className="FeedBackInput__label"
        htmlFor={props.type !== "select" ? props.name : null}
      >
        <h3 className="FeedBackInput__header">{props.title}</h3>
        <p className="FeedBackInput__description">{props.description}</p>
      </label>
      {input}
      {props.errors?.title && <span className="error">Can’t be empty</span>}
    </div>
  );
}

export default FeedBackInput;
