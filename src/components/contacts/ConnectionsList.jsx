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
    <div>
      <div className="w-full flex flex-wrap overflow-scroll">
        {connectionsPages === 0 ? (
          <p>No results found</p>
        ) : (
          filteredConnections.map((connection, index) => {
            if (index >= startIndex && index < endIndex) {
              return (
                <ConnectionItem key={connection.id}>
                  {connection.name}
                </ConnectionItem>
              );
            }
          })
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
