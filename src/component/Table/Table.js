import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

import { GoDotFill } from "react-icons/go";
import { FaStarHalfAlt } from "react-icons/fa";

import "./Table.css";
import image1 from "../../Asset/Images/image1.jpg";
import image2 from "../../Asset/Images/image2.jpg";
import image3 from "../../Asset/Images/image3.jpg";
import image4 from "../../Asset/Images/image4.jpg";
import image5 from "../../Asset/Images/image5.jpg";
const Table = () => {
  return (
    <>
      <div className="footer">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">
                Customer <FaArrowDown />{" "}
              </th>
              <th scope="col">Status</th>
              <th scope="col">Enrolled</th>
              <th scope="col">Progress</th>
              <th scope="col">Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <div className="customers-table">
                  <div>
                    <img
                      src={image1}
                      alt="girl"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="content">
                    <small>Milkey Lawarence</small>
                    <small className="email">haymilkey@gmail.com</small>
                  </div>
                </div>
              </th>
              <td className="enrolled">
                <h5>
                  <GoDotFill /> Enrolled
                </h5>
              </td>
              <td className="date">Jan 4,2022</td>
              <td>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-dark"
                    style={{ width: "25%" }}
                  >
                    25%
                  </div>
                </div>
              </td>
              <td className="star">
                <div className="rating-star">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div className="customers-table">
                  <div>
                    <img
                      src={image2}
                      alt="image-2"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="content">
                    <small>Arjun chauhan</small>
                    <small className="email">arjunchauhan.com</small>
                  </div>
                </div>
              </th>
              <td className="enrolled">
                <h5>
                  <GoDotFill /> Enrolled
                </h5>
              </td>
              <td className="date">Jan 4,2022</td>
              <td>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-dark"
                    style={{ width: "60%" }}
                  >
                    60%
                  </div>
                </div>
              </td>
              <td className="star">
                <div className="rating-star">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </td>
            </tr>

            <tr>
              <th scope="row">
                <div className="customers-table">
                  <div>
                    <img
                      src={image3}
                      alt="girl"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="content">
                    <small>Caitlin King</small>
                    <small className="email">caitlinking@gmail.com</small>
                  </div>
                </div>
              </th>
              <td className="enrolled">
                <h5>
                  <GoDotFill /> Enrolled
                </h5>
              </td>
              <td className="date">Jan 2,2022</td>
              <td>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-dark"
                    style={{ width: "30%" }}
                  >
                    30%
                  </div>
                </div>
              </td>
              <td className="star">
                <div className="rating-star">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
              </td>
            </tr>

            <tr>
              <th scope="row">
                <div className="customers-table">
                  <div>
                    <img
                      src={image4}
                      alt="boys"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "fill",
                      }}
                    />
                  </div>
                  <div className="content">
                    <small>Lulu Myers</small>
                    <small className="email">lulu@lulumyres.com</small>
                  </div>
                </div>
              </th>
              <td className="enrolled">
                <h5>
                  <GoDotFill /> Enrolled
                </h5>
              </td>
              <td className="date">Jan 6,2022</td>
              <td>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-dark"
                    style={{ width: "80%" }}
                  >
                    80%
                  </div>
                </div>
              </td>
              <td className="star">
                <div className="rating-star">
                  <p>Not yet rated</p>
                </div>
              </td>
            </tr>

            <tr>
              <th scope="row">
                <div className="customers-table">
                  <div>
                    <img
                      src={image5}
                      alt="girl"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="content">
                    <small>Adrianna O'Sullivan</small>
                    <small className="email">hi@adriannaosullivan.com</small>
                  </div>
                </div>
              </th>
              <td className="enrolled">
                <h5>
                  <GoDotFill /> Enrolled
                </h5>
              </td>
              <td className="date">Jan 8,2022</td>
              <td>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-dark"
                    style={{ width: "20%" }}
                  >
                    20%
                  </div>
                </div>
              </td>
              <td className="star">
                <div className="rating-star">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
