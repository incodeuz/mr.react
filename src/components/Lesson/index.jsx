import React, { useRef } from "react";

const Lesson = ({ mini }) => {
  return (
    <div
      className="home-wrapper d-flex flex-column align-items-center gap-3"
      style={{ marginLeft: `${!mini ? "80px" : "262px"}` }}
    >
      <h2>Hello bro</h2>
    </div>
  );
};

export default Lesson;
