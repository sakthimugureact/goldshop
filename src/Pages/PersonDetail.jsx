import React, { useEffect, useState } from 'react'

function PersonDetail() {
    const [users,setUsers] = useState()
    useEffect(()=>{
        setUsers(JSON.parse(localStorage.getItem('user')))
    },[])
    console.log(users);
    
  return (
    <>
    {users&&<div className="account-page py-4" style={{ backgroundColor: '#F3F3B7',height:"85vh" }}>
    <div className="container mx-auto">
        <div className="row justify-content-center">
            <div className="col-md-8" >
                <div className="card border-0 shadow-sm"  style={{backgroundColor:"#F3F3B7"}}>
                    <div className="card-body p-4">
                        <div className="text-center mb-4">
                            <h3 className="mb-4">My Account</h3>
                            <div className="avatar mb-3">
                                <img 
                                    src="/images/woman.png" 
                                    alt="Profile" 
                                    className="rounded-circle"
                                    style={{ width: '220px', height: '220px', objectFit: 'cover' }}
                                />
                            </div>
                        </div>

                        <div className="user-details">
                            <div className="mb-3">
                                <strong className="d-inline-block" style={{ width: '100px' }}>Name</strong>
                                <span className="ms-2">: {users.name}</span>
                            </div>
                            <div className="mb-3">
                                <strong className="d-inline-block" style={{ width: '100px' }}>Address</strong>
                                <span className="ms-2">: Abc Street, Goa, India</span>
                            </div>
                            <div className="mb-3">
                                <strong className="d-inline-block" style={{ width: '100px' }}>Phone</strong>
                                <span className="ms-2">: +91 {users.phone}</span>
                            </div>
                            <div className="mb-4">
                                <strong className="d-inline-block" style={{ width: '100px' }}>Email Id</strong>
                                <span className="ms-2">: {users.email}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>}
    </>
  )
}

export default PersonDetail