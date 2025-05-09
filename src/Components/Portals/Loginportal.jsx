import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
function Loginportal() {
  return(
  <div>
    <div className="container-fluid mx-auto logindiv">
        <div className="login-container">
            <h3 className="text-center mb-4">Sign In</h3>
            
            <div className="divider">
                <div className="divider-circle"></div>
            </div>

            <form>
                <div className="mb-3">
                    <label className="form-label">Email / Mobile Number</label>
                    <input type="text" className="form-control" placeholder="Email / Mobile Number" />
                </div>

                <div className="mb-4">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-brown w-100 mb-3">Sign In</button>

                <div className="bottom-links">
                   <Link to='/register'>Sign Up</Link>
                    <a href="#">Forgot Password ?</a>
                </div>
            </form>
        </div>
    </div>
  </div>
  )
}

export default Loginportal