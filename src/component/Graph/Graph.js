import React from "react";
import "./Graph.css";
import bar from "../../Asset/Images/bar.png";
import bar2 from "../../Asset/Images/bar2.png";
import { BsThreeDotsVertical } from "react-icons/bs";
const Graph = () => {
  return (
    <div className="graph">
      <div className="card card1" style={{ width: "25rem" }}>
        <div className="card1-header">
          <div>
            <h4>Websites monitored</h4>
            <p>Your'e using 80% of available spots</p>
          </div>
          <div className="dot">
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className="card-image">
          <img src={bar} alt="bar" />
        </div>
        <div className="card1-footer">
          <div>
            <h5>You've almost reached your limit</h5>
            <p>
              <span>Upgrade plan</span> to moniter more websites
            </p>
          </div>
        </div>
      </div>

      <div className="card card2" style={{ width: "45rem" }}>
        <div className="card2-header">
          <div>
            <h4>Customer breakdown</h4>
            <p>Keep track of cutomers and their ratings.</p>
          </div>
          <div className="dot">
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className="card-body">
          <img src={bar2} />
        </div>
      </div>
    </div>
  );
};

export default Graph;
