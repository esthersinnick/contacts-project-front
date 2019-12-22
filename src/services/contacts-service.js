import axios from 'axios';

class ContactsService {
  constructor() {
    this.auth = axios.create({
      baseURL: 'http://localhost:5000/contacts',
      withCredentials: true,
    })
  }

  getAll() {
    return this.auth.post('/login', user)
      .then(({ data }) => data);
  }
}

const contacts = new ContactsService();

export default contacts
