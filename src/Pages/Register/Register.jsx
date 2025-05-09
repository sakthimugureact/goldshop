import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>
        <div className="container-fluid  mx-auto logindivs">
        <div className="signup-containers">
            <h3 className="text-center mb-4">Sign up</h3>
            
            <div className="dividers">   
                <div className="divider-circles"></div>
            </div>

            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">First Name</label>
                            <input type="text" className="form-control" placeholder="First Name" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Company Name</label>
                            <input type="text" className="form-control" placeholder="Company Name" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email Id</label>
                            <input type="email" className="form-control" placeholder="Email Id" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Whats app Number</label>
                            <input type="text" className="form-control" placeholder="Whats App Number" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">State</label>
                            <input type="text" className="form-control" placeholder="State" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Where did you find us?</label>
                            <input type="text" className="form-control" placeholder="Where did you find us?" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Last Name</label>
                            <input type="text" className="form-control" placeholder="Last Name" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Business Type</label>
                            <input type="text" className="form-control" placeholder="Business Type" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Phone Number</label>
                            <input type="tel" className="form-control" placeholder="Phone Number" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Country</label>
                            <input type="text" className="form-control" placeholder="Country" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">City</label>
                            <input type="text" className="form-control" placeholder="City" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Confirm Password" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Business Model</label>
                            <input type="text" className="form-control" placeholder="Business Model" />
                        </div>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <button type="submit" className="btn btn-brown px-5">Sign Up</button>
                </div>
                <div className="text-center mt-4">
                <p>Already Have an Account? <Link to="/login">Sign In</Link></p>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Register