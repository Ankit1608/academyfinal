import React, { useState } from "react";

import "./Dropdown.css";
import { Link } from "react-router-dom";

const MenuItems = [
  {
    title: "Profile",
    path: "/mycourses",
    cName: "dropdown-link",
  },

  {
    title: "Settings",
    path: "/profilesettings",
    cName: "dropdown-link",
  },
  {
    title: "Logout",
    path: "/",
    cName: "dropdown-link",
  },
];

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <p className="dropdown-li-items">{item.title}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
