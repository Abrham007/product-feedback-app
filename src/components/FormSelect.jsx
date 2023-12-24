import "./FormSelect.css";
import arrowDownIcon from "../assets/shared/icon-arrow-down.svg";
import arrowUpIcon from "../assets/shared/icon-arrow-up.svg";
import { useState } from "react";
import DropMenu from "./DropMenu";

function FormSelect(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  function handleSelect(index) {
    setSelectedIndex(index);
    toggleIsOpen();
    props.handleCurrent(index);
  }

  function toggleIsOpen() {
    setIsOpen((pervValue) => !pervValue);
  }
  return (
    <div className="FromSelect" onClick={toggleIsOpen}>
      <span>{props.selectList[selectedIndex]}</span>
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
            selectedIndex={selectedIndex}
            toggleIsOpen={toggleIsOpen}
          />
        </div>
      )}
    </div>
  );
}

export default FormSelect;
