import "./FormSelect.css";
import arrowDownIcon from "../assets/shared/icon-arrow-down.svg";
import arrowUpIcon from "../assets/shared/icon-arrow-up.svg";
import { useState } from "react";
import DropMenu from "./DropMenu";

function FormSelect(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSelect(index) {
    toggleIsOpen();
    props.handleCurrent(index);
  }

  function toggleIsOpen() {
    setIsOpen((pervValue) => !pervValue);
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setIsOpen((pervValue) => !pervValue);
    }
  }
  return (
    <div
      className="FromSelect"
      onClick={toggleIsOpen}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <span>{props.selectList[props.selectedIndex]}</span>
      {isOpen ? (
        <img src={arrowUpIcon} alt=""></img>
      ) : (
        <img src={arrowDownIcon} alt=""></img>
      )}

      {isOpen && (
        <div className="FromSelect__menu">
          <DropMenu
            menuList={props.selectList}
            btnAction={handleSelect}
            selectedIndex={props.selectedIndex}
            toggleIsOpen={toggleIsOpen}
          />
        </div>
      )}
    </div>
  );
}

export default FormSelect;
