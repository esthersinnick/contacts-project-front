import React from "react";
import withContacts from "./withContacts";

const Pagination = props => {
  return (
    <div className=" absolute bg-white w-full md:w-2/6 bottom-0 p-3 top-auto text-center hidden md:flex">
      <div
        className={props.current === 1 ? "disabled" : "active"}
        onClick={() => {
          props.setPage(props.target, false, props.pages);
        }}
      >
        prev
      </div>
      <p>
        {props.current}/{props.pages}
      </p>
      <div
        className={props.current === props.pages ? "disabled" : "active"}
        onClick={() => {
          props.setPage(props.target, true, props.pages);
        }}
      >
        next
      </div>
    </div>
  );
};

export default withContacts(Pagination);
