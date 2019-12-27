import React, { Component } from 'react'
import withAuth from '../components/withAuth';
import withContacts from '../components/withContacts';
import contactsService from '../services/contacts-service';

class Contacts extends Component {

  //en el componentDidMount o con useEffect, renovar el token con auth props.renewToken()
  componentDidMount = async () => {
    const { token, firstTime, renewToken } = this.props
    if (firstTime) {
      renewToken();
    }
    const contacts = await contactsService.getAll(token);
    this.props.setContacts(contacts)
  }

  render() {
    return (
      <div>
        contacts Page
      </div>
    )
  }
}


export default withAuth(withContacts(Contacts))