import React, { useState } from "react";
import { FaBars, FaBell, FaUser } from "react-icons/fa";
import Dropdown from "./Dropdown";

function Header() {
  const [dropdown, setDropdown] = useState(true);
  return (
    <div
      style={{
        width: "80vw",
        backgroundColor: "white",
        height: "8vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ cursor: "pointer", paddingLeft: "20px" }}>
        <FaBars size={25} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingRight: "20px",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <div style={{ paddingRight: "20px" }}>
          <FaBell size={20} />
          {dropdown && <Dropdown />}
        </div>
        <div
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            backgroundColor: "blue",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Header;
