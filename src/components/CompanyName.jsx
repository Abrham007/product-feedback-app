import "./CompanyName.css";
import hamburgerIcon from "../assets/shared/mobile/icon-hamburger.svg";
import closeIcon from "../assets/shared/mobile/icon-close.svg";

export function sum(a, b) {
  return a + b;
}

function CompanyName(props) {
  function handleClick() {
    props.setIsOpen((prevValue) => !prevValue);
  }
  return (
    <div className="CompanyName">
      <div>
        <h1 className="CompanyName__header">Your Company</h1>
        <p className="CompanyName__paragraph">Feedback Board</p>
      </div>
      <button onClick={handleClick} className="CompanyName__btn">
        <img
          src={props.isOpen ? closeIcon : hamburgerIcon}
          alt="menu icon"
          width={20}
          height={17}
        ></img>
      </button>
    </div>
  );
}

export default CompanyName;
