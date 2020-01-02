import React from "react";
import { ReactComponent as Menu } from "./menu.svg";

const MenuIcon = props => {
  return (
    <div className={props.customDiv}>
      <Menu className={props.customSvg} />
    </div>
  );
};

export default MenuIcon;
