import React from "react";

const ConnectionItem = props => (
  <div className=" w-full md:w-1/5 mt-2">
    <div className="m-1 bg-white pt-4 pb-4 rounded shadow-md flex flex-col items-center h-full">
      <img
        className="rounded-full w-4/5"
        src={props.connection.avatar}
        alt={props.connection.name}
      />
      <p className="text-center text-primary-500 mt-4 ml-2 mr-2">
        {props.connection.name}
      </p>
    </div>
  </div>
);

export default ConnectionItem;
