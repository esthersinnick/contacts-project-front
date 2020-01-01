import React from "react";
import withContacts from "../withContacts";
import ConnectionItem from "./ConnectionItem";

const ConnectionsList = props => {
  const { filteredConnections } = props;
  return (
    <div className="">
      {filteredConnections.map(connection => (
        <ConnectionItem key={connection.id}>{connection.name}</ConnectionItem>
      ))}
    </div>
  );
};

export default withContacts(ConnectionsList);
