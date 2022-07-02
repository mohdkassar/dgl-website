import React from "react";
import "./separator.css";

const Separator = ({ width }) => {
  return <hr className="rounded" style={{ width: width }}></hr>;
};

export default Separator;
