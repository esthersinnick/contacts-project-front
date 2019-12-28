import React from 'react'
import withAuth from '../components/withAuth';
import LoginForm from '../components/LoginForm';
import image from '../images/abstract.jpg';

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-3/5">
        <img className="heigth-30 md:h-screen object-cover object-left" src={image} alt="abstract background" />
      </div>
      <div className="md:w-2/5 height-70 flex flex-col md:h-screen justify-center items-center shadow-2xl">
        <h1 className="text-xl font-bold uppercase tracking-widest">Contacts App</h1>
        <LoginForm />
      </div>
    </div>
  )
}

export default withAuth(Login);
