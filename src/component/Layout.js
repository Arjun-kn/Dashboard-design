import React from "react";
import "./Layout.css";
import Menu from "./Menu/Menu";
import Home from "./Home/Home";

const Layout = () => {
  return (
    <>
      <div className="sidebar-section">
        <div className="sidebar">
          <Menu />
        </div>
        <div className="home">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
