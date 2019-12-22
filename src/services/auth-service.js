import axios from 'axios';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: 'http://localhost:5000/auth',
      withCredentials: true,
    })
  }

  login = async (user) => {
    //user tiene que tener email, password y remember
    const res = await this.auth.post('/login', user);
    return res.data;
  }

  renewToken = async (token) => {
    const res = await this.auth.post('/renewToken', token);
    return res.data;
  }
}

const auth = new AuthService();
export default auth
