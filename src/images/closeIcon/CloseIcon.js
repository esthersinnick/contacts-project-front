import React from "react";
import { ReactComponent as Close } from "./close.svg";

const CloseIcon = props => {
  return (
    <div className={props.customDiv}>
      <Close className={props.customSvg} />
    </div>
  );
};

export default CloseIcon;
