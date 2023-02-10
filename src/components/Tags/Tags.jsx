import React from "react";
import "./tags.scss";
const Tags = ({ title }) => {
  return (
    <div className="tagsContainer">
      <p className="smallText"> {title}</p>
    </div>
  );
};

export default Tags;
