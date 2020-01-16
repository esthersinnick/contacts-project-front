import React, { useState, useEffect, useContext } from "react";
import { ContactsContext } from "../context/contacts-context";
import { AuthContext } from "../context/auth-context";
import contactsService from "../services/contacts-service";
import ContactDetail from "../components/contacts/ContactDetail";
import ContactsListContainer from "../components/contacts/ContactsListContainer";
import MenuIcon from "../images/menuIcon/MenuIcon";

const Contacts = () => {
  const [menuOpened, setMenuOpened] = useState(true);
  const contactsContext = useContext(ContactsContext);
  const authContext = useContext(AuthContext);

  /*eslint-disable */
  useEffect(() => {
    if (authContext.firstTime) {
      authContext.validateToken();
    }
    const getAllContacts = async () => {
      const contacts = await contactsService.getAll(authContext.token);
      contacts.sort((a, b) => (a.name > b.name ? 1 : -1));
      contactsContext.setContacts(contacts);
    };
    getAllContacts();
  }, []);
  /*eslint-enable */

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <>
      <div className="absolute top-0 right-0 md:hidden" onClick={toggleMenu}>
        <MenuIcon
          customDiv="p-2 rounded ml-3 cursor-pointer bg-primary-100"
          customSvg="w-8 m-4 activeIcon"
        />
      </div>

      <main className="flex flex-col md:flex-row">
        <ContactsListContainer
          toggleMenu={toggleMenu}
          menuOpened={menuOpened}
        />
        <ContactDetail />
      </main>
    </>
  );
};

export default Contacts;
