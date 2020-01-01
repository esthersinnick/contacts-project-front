import React from "react";
import withContacts from "../withContacts";

const ConnectionsList = props => {
  const { filteredConnections } = props;
  return (
    <div className="">
      {filteredConnections.map(connection => (
        <div key={connection.id}>{connection.name}</div>
      ))}
    </div>
  );
};

export default withContacts(ConnectionsList);
