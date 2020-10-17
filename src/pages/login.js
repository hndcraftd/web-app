import React, {useState} from 'react'
import Nav from '../components/Nav'
import '../assets/styles/login-style.css'
import log from "../assets/log.svg";
import register from "../assets/register.svg"

export default function Login() {
  let cont = true
  

    function handleClick(e) {
      e.preventDefault()
      const container = document.querySelector(".container")

      if(cont) {
         container.classList.add("sign-up-mode");
         console.log(container.classList)
      } else {
        container.classList.remove("sign-up-mode");
        console.log(container.classList)
      }

      cont = !cont;
      console.log(cont)
      
    }

  return (
    <>
      <Nav />
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with Google</p>
              <div className="social-media">
                <a href="google.com" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
              </div>
            </form>
            <form action="/" className="sign-up-form">
              <h2 className="title">Register</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <button type="submit" className="btn" >Sign up</button>
              <p className="social-text">Or Sign up with Google</p>
              <div className="social-media">
                <a href="google.com" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panels left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Sign up to start delivering live updates to your clients and explore insight about your company!
              </p>
              <button className="btn transparent" id="sign-up-btn" onClick={(e) => {handleClick(e)}}>
                Register
              </button>
            </div>
            <img src={log} className="image" alt="" />
          </div>
          <div className="panels right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Login to access your dashboard and view orders and insights.
              </p>
              <button className="btn transparent" id="sign-in-btn" onClick={(e) => {handleClick(e)}}>
                Sign in
              </button>
            </div>
            <img src={register} className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
