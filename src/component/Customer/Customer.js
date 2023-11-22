import React from "react";
import "./Customer.css";
import { CiSearch } from "react-icons/ci";
import { IoIosCloudUpload } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
const Customer = () => {
  return (
    <>
      <div className="customer">
        <div className="card">
          <div className="upper-section">
            <div className="upper-left">
              <h4>Customer moments</h4>
              <p>240 monitored</p>
            </div>
            <div className="upper-right-section">
              <div>
                <button className="btn cloud">
                  <IoIosCloudUpload style={{ marginRight: "6px" }} />
                  Import
                </button>
                <button className="btn customer-btn">+ Add customer</button>
              </div>
            </div>
          </div>
          <div className="lower-section">
            <div className="lower-left-section">
              <p>View all</p>

              <p>Monitored</p>

              <p>Unmonitored</p>
            </div>
            <div className="lower-right-section">
              <label>
                <CiSearch className="search-icon" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="search-input"
                />
              </label>
              <button className="btn filter-btn">
                <IoFilter /> Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
