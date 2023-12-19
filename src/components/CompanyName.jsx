import "./CompanyName.css";
import hamburgerIcon from "../assets/shared/mobile/icon-hamburger.svg";
import closeIcon from "../assets/shared/mobile/icon-close.svg";

function CompanyName() {
  return (
    <div className="CompanyName">
      <div>
        <h1 className="CompanyName__header">Frontend Mentor</h1>
        <p className="CompanyName__paragraph">Feedback Board</p>
      </div>
      <button className="CompanyName__btn">
        <img src={hamburgerIcon} alt="menu icon"></img>
      </button>
    </div>
  );
}

export default CompanyName;
