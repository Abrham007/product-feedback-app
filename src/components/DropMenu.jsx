import "./DropMenu.css";
import checkIcon from "../assets/shared/icon-check.svg";

function DropMenu(props) {
  function handleClick(index, event) {
    props.btnAction(index, event);

    if (props.toggleIsOpen) {
      props.toggleIsOpen();
    }
  }

  return (
    <menu className="DropMenu" aria-live="polite">
      {props.menuList.map((item, index) => (
        <li
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleClick(index);
              event.preventDefault();
            }
          }}
          className="DropMenu__item"
          key={index}
        >
          <button
            onClick={(event) => {
              handleClick(index);
              event.preventDefault();
            }}
            className="DropMenu__btn"
          >
            <span>{item}</span>
            <img
              className="DropMenu__icon"
              style={
                props.selectedIndex === index ? { visibility: "visible" } : {}
              }
              aria-live="polite"
              src={checkIcon}
              alt="check icon"
              width={11}
              height={7.5}
            ></img>
          </button>
        </li>
      ))}
    </menu>
  );
}

export default DropMenu;
