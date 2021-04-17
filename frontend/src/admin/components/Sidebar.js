import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from "react-pro-sidebar";
import {
  FaTv,
  FaHeart,
  FaBook,
  FaRoute,
  FaRegPaperPlane,
  FaUser,
} from "react-icons/fa";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <ProSidebar
        collapsed={false}
        image={"https://picsum.photos/200/300"}
        width="20vw"
      >
        <SidebarHeader>
          <h1>Wassap</h1>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="circle" popperArrow={true}>
            <MenuItem icon={<FaTv />}>
              {" "}
              <Link to="/" />
              Dashboard
            </MenuItem>
            <SubMenu title="Users" icon={<FaUser />}>
              <MenuItem>
                <Link to="/usersgist" />
                Users Gist
              </MenuItem>
              <MenuItem>
                <Link to="/userspayments" />
                Users Payments
              </MenuItem>
              <MenuItem>
                <Link to="/userssecurity" />
                Users Security
              </MenuItem>
            </SubMenu>
            <SubMenu title="Flashes" icon={<FaHeart />}>
              <MenuItem>
                <Link to="/addflash" />
                Add Flash
              </MenuItem>
              <MenuItem>Edit Flash</MenuItem>
              <MenuItem>
                <Link to="/allflashes" />
                All Flashes
              </MenuItem>
            </SubMenu>
            <SubMenu title="Courses" icon={<FaBook />}>
              <MenuItem>
                <Link to="/addcourse" />
                Add Course
              </MenuItem>
              <MenuItem>Edit Course</MenuItem>
              <MenuItem>
                <Link to="/allcourses" />
                All Courses
              </MenuItem>
            </SubMenu>
            <SubMenu title="Paths" icon={<FaRoute />}>
              <MenuItem>
                {" "}
                <Link to="/addpath" />
                Add Path
              </MenuItem>
              <MenuItem>Edit Path</MenuItem>
              <MenuItem>
                <Link to="/allpaths" />
                All Paths
              </MenuItem>
            </SubMenu>

            <SubMenu title="Pages" icon={<FaRegPaperPlane />}>
              <MenuItem>
                <Link to="/footer" />
                Footer
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <h5>kleen</h5>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;
