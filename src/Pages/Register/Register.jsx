import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../../Context/useForm'

function Register() {
    const {values,error,getValues,validateForm} = useForm();
    const navi=useNavigate()
    const formSubmit = (e) =>{
    e.preventDefault();
    
    if(validateForm()){
      let exist =localStorage.getItem('signup');
      console.log(exist);
      
      let loadSignup = exist?JSON.parse(exist):[];
      if(loadSignup.some(users=>users.email===values.email)){
       alert("Email Already Registerd")
      }
      else if(loadSignup.some(users=>users.phone===values.phone)){
        alert("Phone Number Already Registered")
      }
      else{
        loadSignup.push(values);
        localStorage.setItem("signup",JSON.stringify(loadSignup));
        navi('/login')
      }
    }
  }
  return (
    <div>
        <div className="container-fluid  mx-auto logindivs">
        <div className="signup-containers">
            <h3 className="text-center mb-4">Sign up</h3>
            
            <div className="dividers">   
                <div className="divider-circles"></div>
            </div>

            <form onSubmit={(e)=>formSubmit(e)}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">First Name</label>
                            <input type="text" className="form-control" name='name' placeholder="First Name" value={values.name} onChange={getValues} />
                            {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Company Name</label>
                            <input type="text" className="form-control" name='company' placeholder="Company Name" value={values.company} onChange={getValues} />
                            {error.company && <p style={{ color: 'red' }}>{error.company}</p>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email Id</label>
                            <input type="email" className="form-control" name='email' placeholder="Email Id" value={values.email} onChange={getValues} />
                            {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Whats app Number</label>
                            <input type="text" className="form-control" name='whatsapp' placeholder="Whats App Number" value={values.whatsapp} onChange={getValues} />
                            {error.whatsapp && <p style={{ color: 'red' }}>{error.whatsapp}</p>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">State</label>
                            <input type="text" className="form-control" name='state' placeholder="State" value={values.state} onChange={getValues}/>
                            {error.state && <p style={{ color: 'red' }}>{error.state}</p>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' placeholder="Password" value={values.password} onChange={getValues}/>
                            {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Where did you find us?</label>
                            <input type="text" className="form-control" name='findus' placeholder="Where did you find us?" value={values.findus} onChange={getValues}/>
                            {error.findus && <p style={{ color: 'red' }}>{error.findus}</p>}
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Last Name</label>
                            <input type="text" className="form-control" name='lastname' placeholder="Last Name" value={values.lastname} onChange={getValues}/>
                            {error.lastname && <p style={{ color: 'red' }}>{error.lastname}</p>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Business Type</label>
                            <input type="text" className="form-control" name='business' placeholder="Business Type" value={values.business} onChange={getValues}/>
                            {error.business && <p style={{ color: 'red' }}>{error.business}</p>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Phone Number</label>
                            <input type="tel" className="form-control" name='phone' placeholder="Phone Number" value={values.phone} onChange={getValues}/>
                            {error.phone && <p style={{ color: 'red' }}>{error.phone}</p>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Country</label>
                            <input type="text" className="form-control" name='country' placeholder="Country" value={values.country} onChange={getValues}/>
                            {error.country && <p style={{ color: 'red' }}>{error.country}</p>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">City</label>
                            <input type="text" className="form-control" name='city' placeholder="City" value={values.city} onChange={getValues}/>
                            {error.city && <p style={{ color: 'red' }}>{error.city}</p>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" name='cnfpass' placeholder="Confirm Password" value={values.cnfpass} onChange={getValues}/>
                            {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Business Model</label>
                            <input type="text" className="form-control" name='business' placeholder="Business Model" value={values.business} onChange={getValues}/>
                            {error.business && <p style={{ color: 'red' }}>{error.business}</p>}
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