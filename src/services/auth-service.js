import axios from "axios";

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: "http://localhost:5000/auth",
      withCredentials: true
    });
  }

  login = async user => {
    const res = await this.auth.post("/login", user);
    return res.data;
  };

  renewToken = async token => {
    const res = await this.auth.post("/renew-token", { token });
    return res.data;
  };
}

const auth = new AuthService();
export default auth;
