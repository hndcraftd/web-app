import React from 'react'

const Nav = () => {
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="">Handcrafted</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">Dashboard</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Order</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Insights</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <button className="btn btn-outline-success my-2 my-sm-0 mr-3" type="submit">Login</button>
      <button className="btn btn-success my-2 my-sm-0" type="submit">Register</button>
    </form>
  </div>
</nav>
  )
}

export default Nav;

