import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div
    className={`menu-item ${size}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="background-image"
    ></div>
    <div className="content">
      <h1>{title.toUpperCase()}</h1>
      <span>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
