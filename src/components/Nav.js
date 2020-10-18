import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import Logo from '../assets/logo.svg';

import tokenCache from "../services/tokenCache";



const Nav = () => {
  const token  = tokenCache.get()
  const history = useHistory();

  const logout = (token) => {
    tokenCache.delete(token)
    history.push("/");
  }
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/"><img src={Logo} width="200" alt="Lorem Ipsum"/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to="/get-started" className="nav-link" >Get Started</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link" >About</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      {!token ? 
        <Link className="login-button" to="/auth"><button className="btn btn-outline-success my-2 my-sm-0 mr-3" type="submit">Login</button></Link> 
        :  <button className="btn btn-outline-success my-2 my-sm-0 mr-3" type="button" onClick={(token) => logout(token)}>Logout</button>}
    </form>
  </div>
</nav>
  )
}

export default Nav;

