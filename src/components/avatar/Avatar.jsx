import React from "react";
import "./Avatar.css";

const Avatar = ({ src }) => {
  return (
    <>
      <img src={src} alt="Avatar" className="avatar" />
    </>
  );
};

export default Avatar;
