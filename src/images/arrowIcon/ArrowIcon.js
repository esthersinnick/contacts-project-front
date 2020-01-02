import React from "react";
import { ReactComponent as Arrow } from "./arrow.svg";

const ArrowIcon = props => {
  return (
    <div className={props.customDiv}>
      <Arrow className={props.customSvg} />
    </div>
  );
};

export default ArrowIcon;
