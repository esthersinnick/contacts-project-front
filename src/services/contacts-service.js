import axios from 'axios';

class ContactsService {
  constructor() {
    this.contacts = axios.create({
      baseURL: 'http://localhost:5000/contacts',
      withCredentials: true,
    })
  }

  getAll(token) {
    return this.contacts.get('/', { headers: { 'Authorization': token } })
      .then(({ data }) => data);
  }
}

const contacts = new ContactsService();

export default contacts