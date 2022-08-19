import React from "react";
// import eksternal css
import "./StudentInfo.css";

const StudentInfo = ({ name, status, bio, size, backgroundColor }) => {
  // Cara memberi styling menggunakan internal css
  const styleInfo = {
    fontSize: size,
    color: "blue",
  };
  return (
    <div className="info">
      <h2 style={styleInfo}>{name}</h2>
      {/* menggunakan inline css */}
      <h3 style={{ backgroundColor }}>{status}</h3>
      <p>{bio}</p>
    </div>
  );
};

export default StudentInfo;
