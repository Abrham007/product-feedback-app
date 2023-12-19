import "./DropMenu.css";
import checkIcon from "../assets/shared/icon-check.svg";

function DropMenu(props) {
  return (
    <menu className="DropMenu">
      {props.menuList.map((item, index) => (
        <li className="DropMenu__item" key={index}>
          <button className="DropMenu__btn">
            <span>{item}</span>
            <img
              className="DropMenu__icon"
              style={props.activeBtn === index ? { visibility: "visible" } : {}}
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