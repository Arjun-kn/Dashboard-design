import React from "react";
import "./Home.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosSwitch, IoIosCloudUpload } from "react-icons/io";
const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="home-container">
          <h2>Cutomer analytics</h2>
        </div>
        <div className="right-home-icon">
          <IoSearchOutline className="search" />
          <button className="btn customize">
            <IoIosSwitch style={{ marginRight: "6px" }} />
            Customize
          </button>
          <button className="btn export">
            <IoIosCloudUpload
              style={{ transform: "rotateY(180deg)", marginRight: "8px" }}
            />
            Export
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
