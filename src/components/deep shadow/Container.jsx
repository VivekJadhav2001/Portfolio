import React from "react";
import "./Container.css";
function Container({image}) {
  return (
    <div className="image-container ">
      <img className="image red" src={image} />
      <img className="image green" src={image} />
      <img className="image blue" src={image} />
    </div>
  );
}

export default Container;
