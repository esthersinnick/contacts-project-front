import React from "react";
import withContacts from "../withContacts";
import ConnectionItem from "./ConnectionItem";
import Pagination from "../Pagination";

const ConnectionsList = props => {
  const {
    filteredConnections,
    connectionsPages,
    currentConnectionsPage
  } = props;
  const startIndex = (currentConnectionsPage - 1) * 20;
  const endIndex = startIndex + 20;
  return (
    <div className="flex flex-col items-center">
      <div className="w-full pl-4 pr-4 pb-16 flex flex-wrap overflow-scroll">
        {connectionsPages === 0 ? (
          <p>No results found</p>
        ) : (
          filteredConnections.map((connection, index) =>
            index >= startIndex && index < endIndex ? (
              <ConnectionItem key={connection.id} connection={connection} />
            ) : null
          )
        )}
      </div>
      <Pagination
        pages={props.connectionsPages}
        current={props.currentConnectionsPage}
        target="currentConnectionsPage"
      />
    </div>
  );
};

export default withContacts(ConnectionsList);
