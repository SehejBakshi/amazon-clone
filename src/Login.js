import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    // firebase login key
  }

  const register = e => {
    e.preventDefault();
    // firebase login key
  }

  return (
    <div className='login'>
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className='login_container'>
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="Password" value={password} onChange={e => setPassword(e.target.value)}/>

          <button
            type='submit'
            onClick={signIn}
            className='login_signInButton'
          >
            Sign In
          </button>

        </form>

        <p>
          By continuing, you agree to Amazon-Clone's Conditions of
          Use and Privacy Notice.
        </p>

        <button
          onClick={register}
          className='login_registerButton'
        >
          Create your Amazon-Clone account
        </button>

      </div>

    </div>
  )
}

export default Login
