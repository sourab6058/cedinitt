import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ links, handleMouseLeave, handleMouseEnter }) => {
  return (
    <div
      className="dropdown-menu"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul>
        {links.map(({ text, link }) => (
          <li className="text-black">
            <Link to={link} className="text-xs">
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
