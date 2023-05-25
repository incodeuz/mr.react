import React from "react";

const Dashboard = ({ mini }) => {
  return (
    <div
      className="home-wrapper"
      style={{ marginLeft: `${!mini ? "80px" : "262px"}` }}
    >
      Dashboard
    </div>
  );
};

export default Dashboard;
