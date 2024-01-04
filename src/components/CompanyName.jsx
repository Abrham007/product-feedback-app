import hamburgerIcon from "../assets/shared/mobile/icon-hamburger.svg";
import closeIcon from "../assets/shared/mobile/icon-close.svg";
import "./CompanyName.css";

function CompanyName(props) {
  //  This function handles the click of the hamberger menu
  //  and shows the suggestions board in the suggestions component
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
