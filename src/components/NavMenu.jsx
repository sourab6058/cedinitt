import * as React from "react";
import { FaAngleDown } from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";
import "../styles/navbar.css";

export default function NavMenu({ name, links }) {
  const [isDropdownVisible, setDropdownVisible] = React.useState(false);
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div>
      <div
        className="menu flex items-center justify-center cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {name}
        <FaAngleDown />
      </div>
      {isDropdownVisible && (
        <DropdownMenu
          links={links}
          handleMouseLeave={handleMouseLeave}
          handleMouseEnter={handleMouseEnter}
        />
      )}
    </div>
  );
}
