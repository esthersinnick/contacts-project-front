import React, { Component } from 'react';
import withAuth from '../components/withAuth';


class Login extends Component {
  state = {
    email: '',
    password: '',
    remember: false,
  }

  //añadir validaciones
  inputOnChange = (event, checkbox) => {
    const { name, value } = event.target
    if (checkbox) {
      this.setState({
        [name]: event.target.checked
      })
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, remember } = this.state;
    await this.props.login({ email, password, remember });
  }

  render() {
    const { email, password, remember } = this.state
    return (
      <div>
        <h1>Login page</h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="email" name="email" value={email} type="email" onChange={this.inputOnChange} />
          <input placeholder="password" name="password" value={password} type="password" onChange={this.inputOnChange} />
          <input name="remember" checked={remember} type="checkbox" onChange={(event) => { this.inputOnChange(event, 'checkbox') }} /> Remember me
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}


export default withAuth(Login)