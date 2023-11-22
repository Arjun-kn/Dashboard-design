import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { RiHome3Fill } from "react-icons/ri";
import { LuLayoutDashboard, LuTimerReset } from "react-icons/lu";
import { IoMdAnalytics } from "react-icons/io";
import { RiBarChartBoxLine } from "react-icons/ri";
import {
  AiOutlineUsergroupAdd,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { TiEqualsOutline } from "react-icons/ti";
import { BsBarChart } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import image1 from "../../Asset/Images/image1.jpg";

import "./Menu.css";
const Menu = () => {
  return (
    <div className="menu">
      <div className="icon-head">
        <h3>
          <AiFillThunderbolt />
        </h3>
        Untitled UI
      </div>
      <div className="dashboard">
        <h6>DASHBOARD</h6>
        <div className="dashboard-icons">
          <div>
            <h5>
              <RiHome3Fill />{" "}
            </h5>
            Overview
          </div>
          <div>
            <h5>
              <LuLayoutDashboard />{" "}
            </h5>
            Current Projects <span className="no">10</span>
          </div>
        </div>

        <div className="cutomers">
          <h6>CUSTOMERS</h6>
          <div className="cutomers-icons">
            <div>
              <h5>
                <IoMdAnalytics />{" "}
              </h5>
              Analytics
            </div>
            <div>
              <h5>
                <AiOutlineUsergroupAdd />{" "}
              </h5>
              Audience
            </div>

            <div>
              <h5>
                <RiBarChartBoxLine />{" "}
              </h5>
              Reporting
            </div>

            <div>
              <h5>
                <TiEqualsOutline />{" "}
              </h5>
              Categories
            </div>

            <div>
              <h5>
                <AiOutlineFundProjectionScreen /> Projections
              </h5>
            </div>
          </div>
          <div className="reports">
            <h6>REPORTS</h6>
            <div className="reports-icons">
              <div>
                <h5>
                  <BsBarChart />{" "}
                </h5>
                Overview
              </div>

              <div>
                <h5>
                  <LuTimerReset />{" "}
                </h5>
                Scheduled reports
              </div>
            </div>
          </div>

          <div className="menu-footer">
            <h5>
              <IoMdSettings />
            </h5>
            Settings
            <div></div>
          </div>
          <div className="menu-user-bar">
            <img
              src={image1}
              alt="girl"
              style={{
                width: "45px",
                height: "40px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div className="user-bar-content">
              <small>Lilly-Rose Chedjou</small>
              <small>hello@lilly-rose.com</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
