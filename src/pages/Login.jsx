
{/* import { useState, useEffect } from 'react' */}
{/*maybe import local styles */}

import { Link } from "react-router-dom";


function Login() {

  return (
    <>
      <div id="loginForm"  >
        <form action="/login" method="POST" id="loginFormInput" autoComplete="off">
          <div className="loginInput">
            <input id="email" name="username" autoComplete="off" placeholder="Enter Email" type="text" />
          </div>
          <div className="loginInput">
            <input id="password" name="password"  autoComplete="new-password" placeholder="Enter Password" type ="password" />
          </div>
          <div className="formBtns">
            <button type="submit" id="loginBtn">Log In</button>
          </div>
        </form>
          <div className="formBtns" id="signUp">
            <div >
              Not a member? 
            </div>
            <Link to="/sign-up">
              <button>Sign Up!</button>
            </Link>
          </div>
      </div>
    </>
  )
}

export default Login;