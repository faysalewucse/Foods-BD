import React from "react";
import "../CSS/CustomerDashboard.css";

function CustomerDashboard() {
  return (
    <div className="container">
      <div className="propic-container">
        <img className="profile-image" src="images/pro_pic.jpg" alt="" />
        <h4>
          <strong>Faysal Ahmed</strong>
        </h4>
      </div>
      <hr className="dashboard--hr" />
      <div className="dashboard-container">
        <div className="col-3 left-dash">
          <h4 className="left-dash-item">Dashboard</h4>
          <h4 className="left-dash-item">Profile</h4>
          <h4 className="left-dash-item">Past Order</h4>
          <h4 className="left-dash-item">Offer</h4>
          <hr></hr>
          <h4 className="left-dash-item">Settings</h4>
          <h4 className="left-dash-item">Logout</h4>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;
