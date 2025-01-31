import React, { useState } from "react";
import { Divider } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";

const MAX_ITEMS_PER_COLUMN = 7;

const splitIntoColumns = (items, maxItemsPerColumn) => {
  const columns = [];
  for (let i = 0; i < items.length; i += maxItemsPerColumn) {
    columns.push(items.slice(i, i + maxItemsPerColumn));
  }
  return columns;
};

const MegaDropDownMenu = ({ name, links }) => {
  const columns = splitIntoColumns(links, MAX_ITEMS_PER_COLUMN);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
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
        <div
          className="flex space-x-4 bg-gray-100 dropdown-menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {columns.map((column, index) => (
            <ul key={index} className="flex flex-col text-black text-sm">
              {column.map((link, idx) => (
                <li key={idx} className="p-2 min-w-[10rem]">
                  <a href={link.link} target="_blank">
                    {link.text}
                  </a>
                </li>
              ))}
              {index !== columns.length - 1 && (
                <Divider orientation="vertical" flexItem />
              )}
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default MegaDropDownMenu;
