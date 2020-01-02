import React, { Component } from "react";
import withAuth from "../components/withAuth";
import withContacts from "../components/withContacts";
import contactsService from "../services/contacts-service";
import ContactDetail from "../components/contacts/ContactDetail";
import ContactsListContainer from "../components/contacts/ContactsListContainer";
import MenuIcon from "../images/menuIcon/MenuIcon";

class Contacts extends Component {
  state = {
    menuOpened: true
  };
  componentDidMount = async () => {
    const { token, firstTime, validateToken } = this.props;
    if (firstTime) {
      validateToken();
    }
    const contacts = await contactsService.getAll(token);
    contacts.sort((a, b) => (a.name > b.name ? 1 : -1));
    this.props.setContacts(contacts);
  };

  toggleMenu = () => {
    this.setState({
      menuOpened: !this.state.menuOpened
    });
  };

  render() {
    return (
      <>
        <div
          className="absolute top-0 right-0 md:hidden"
          onClick={this.toggleMenu}
        >
          <MenuIcon
            customDiv="p-2 rounded ml-3 cursor-pointer bg-primary-100"
            customSvg="w-8 m-4 activeIcon"
          />
        </div>

        <main className="flex flex-col md:flex-row">
          <ContactsListContainer
            toggleMenu={this.toggleMenu}
            menuOpened={this.state.menuOpened}
          />
          <ContactDetail />
        </main>
      </>
    );
  }
}

export default withAuth(withContacts(Contacts));
