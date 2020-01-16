import React, { useContext } from "react";
import { ContactsContext } from "../../context/contacts-context";
import ConnectionItem from "./ConnectionItem";
import Pagination from "../Pagination";
import loader from "../../images/load.gif";

const ConnectionsList = () => {
  const contactsContext = useContext(ContactsContext);
  const { filteredConnections, currentConnectionsPage } = contactsContext;
  const startIndex = (currentConnectionsPage - 1) * 20;
  const endIndex = startIndex + 20;
  return (
    <div className="flex flex-col items-center">
      <div className="w-full pl-4 pr-4 pb-16 flex flex-wrap overflow-scroll">
        {filteredConnections ? (
          filteredConnections.length > 0 ? (
            filteredConnections.map((connection, index) =>
              index >= startIndex && index < endIndex ? (
                <ConnectionItem key={connection.id} connection={connection} />
              ) : null
            )
          ) : (
            <p className="w-full text-center m-3 p-2 font-light text-primary-500">
              No results found
            </p>
          )
        ) : (
          <div className="w-full flex justify-center items-center">
            <img src={loader} className="w-1/5" alt="loading" />
          </div>
        )}
      </div>
      <Pagination
        pages={contactsContext.connectionsPages}
        current={contactsContext.currentConnectionsPage}
        target="currentConnectionsPage"
      />
    </div>
  );
};

export default ConnectionsList;
