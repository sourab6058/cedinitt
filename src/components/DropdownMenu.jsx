import React from "react";

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
            <a href={link} target="_blank" className="text-xs">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
