import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../../Context/useForm";
function Loginportal() {
  const [showlogin, setShowlogin] = useState(false);
  const { loginerr, loginvalues, getLoginvalues, validateLogin, setLoginerr } =useForm();
  const navi = useNavigate()

  useEffect(() => {
    localStorage.setItem("login", showlogin);
  }, [showlogin]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateLogin()) {
      const user = JSON.parse(localStorage.getItem("signup"));
      const userfind = user.find(
        (u) =>
          u.email === loginvalues.email && u.password === loginvalues.password
      );
      console.log(userfind);

      if (userfind) {
        navi("/");
        setShowlogin(true);
        location.reload()
        localStorage.setItem("user", JSON.stringify(userfind));
      } else {
        setLoginerr({ ...loginerr, loginer: "Invalid Password" });
      }
    }
  };

  return (
    <div>
      <div className="container-fluid mx-auto logindiv">
        <div className="login-container">
          <h3 className="text-center mb-4">Sign In</h3>

          <div className="divider">
            <div className="divider-circle"></div>
          </div>

          <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="text" className="form-control" placeholder="Email" name="email" value={loginvalues.email} onChange={getLoginvalues}/>
               {loginerr.email && <p style={{ color: 'red' }}>{loginerr.email}</p>}
            </div>

            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={loginvalues.password} onChange={getLoginvalues}
              />
               {loginerr.password && <p  style={{ color: 'red' }}>{loginerr.password}</p>}
          {loginerr.loginer && <p style={{ color: 'red' }}>{loginerr.loginer}</p>}
            </div>

            <button type="submit" className="btn btn-brown w-100 mb-3">
              Sign In
            </button>

            <div className="bottom-links">
              <Link to="/register">Sign Up</Link>
              <a href="#">Forgot Password ?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginportal;
