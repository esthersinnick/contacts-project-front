import React from "react";
import withContacts from "./withContacts";
import ArrowIcon from "../images/arrowIcon/ArrowIcon";

const Pagination = props => {
  return (
    <div className="fixed inherit bottom-0 top-auto p-3 justify-center bg-white flex items-center rounded border border-primary-100">
      <div
        onClick={() => {
          props.setPage(props.target, false, props.pages);
        }}
      >
        <ArrowIcon
          customDiv={
            props.current === 1
              ? "rotate p-2 rounded mr-3 cursor-pointer bg-primary-100"
              : "rotate p-2 rounded mr-3 cursor-pointer border border-primary-500"
          }
          customSvg={props.current === 1 ? "disabledIcon" : "activeIcon"}
        />
      </div>
      <p>
        {props.current}/{props.pages}
      </p>
      <div
        onClick={() => {
          props.setPage(props.target, true, props.pages);
        }}
      >
        <ArrowIcon
          customDiv={
            props.current === props.pages
              ? "p-2 rounded ml-3 cursor-pointer bg-primary-100"
              : "p-2 rounded ml-3 cursor-pointer border border-primary-500"
          }
          customSvg={
            props.current === props.pages ? "disabledIcon" : "activeIcon"
          }
        />
      </div>
    </div>
  );
};

export default withContacts(Pagination);
