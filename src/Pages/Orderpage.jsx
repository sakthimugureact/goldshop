import React, { use, useEffect, useState } from 'react'
import Paymnetportal from '../Components/Portals/Paymnetportal';

function Orderpage() {
    const [ordervalue,setOrdervalue] = useState();
    const [paymethod,setPaymethod] = useState();
    console.log(paymethod);
    
    const [pay,setPay] = useState(false)
    useEffect(()=>{
        setOrdervalue(JSON.parse(localStorage.getItem('orderpage')));
    },[])
    console.log(ordervalue);
    
    
  return (
    <div className="payment-section py-4" style={{ backgroundColor: '#F3F3B7' }}>
    <div className="container-fluid mx-auto">
        <h4 className="text-center mb-4">Make Payment</h4>
        
       {ordervalue&& <div className="row" >
            {/* Product Details */}
            <div className="col-md-8 mx-auto">
                <div className="card border-0 mb-4" style={{ backgroundColor: '#F3F3B7' }}>
                    <div className="card-body">
                        <h5 className="mb-4 fs-4"><u>Product Details</u></h5>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="mb-3">
                                    <strong className='fs-5'>Product Name:</strong>
                                    <span className="ms-2">{ordervalue.title}</span>
                                </div>
                                <div className="mb-3">
                                    <strong className='fs-5'>Size:</strong>
                                    <span className="ms-2">{ordervalue.size}</span>
                                </div>
                                <div className="mb-3">
                                    <strong className='fs-5'>Colour:</strong>
                                    <span className="ms-2">{ordervalue.color}</span>
                                </div>
                                <div className="mb-3">
                                    <strong className='fs-5'>Quantity:</strong>
                                    <span className="ms-2">{ordervalue.quantity}</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img 
                                    src={ordervalue.designsrc}
                                    alt="Green Kundan Earring" 
                                    className="img-fluid rounded orderimg"
                                />
                            </div>
                        </div>

                        <h5 className="mb-3 fs-4" ><u>Payment Detail</u></h5>
                        <div className="mb-3">
                            <strong className='fs-5'>Price:</strong>
                            <span className="ms-2">₹{ordervalue.amount}</span>
                        </div>
                        <div className="mb-3">
                            <strong className='fs-5'>Tax:</strong>
                            <span className="ms-2">₹30 (2%)</span>
                        </div>
                        <div className="mb-3">
                            <strong className='fs-5'>Total Amount:</strong>
                            <span className="ms-2">₹{ordervalue.quantity*ordervalue.amount+30}</span>
                        </div>
                    </div>
                </div>

                <div className="card border-0 shadow-sm" style={{ backgroundColor: '#F3F3B7' }}>
                    <div className="card-body">
                        <h5 className="mb-4 fs-4"><u>Pay via</u>    </h5>
                        <div className="form-check mb-3">
                            <input 
                                type="radio" 
                                className="form-check-input" 
                                name="paymentMethod" 
                                id="phonePe"
                                value={"Phonepe"}
                                onChange={(e)=>setPaymethod(e.target.value)}
                            />
                            <label className="form-check-label fw-semibold" htmlFor="phonePe">
                                Phone Pe
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input 
                                type="radio" 
                                className="form-check-input" 
                                name="paymentMethod" 
                                id="gpay"
                                  value={"gpay"}
                                onChange={(e)=>setPaymethod(e.target.value)}
                            />
                            <label className="form-check-label fw-semibold" htmlFor="gpay">
                                GPay
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input 
                                type="radio" 
                                className="form-check-input" 
                                name="paymentMethod" 
                                id="upi"
                                  value={"upi"}
                                onChange={(e)=>setPaymethod(e.target.value)}
                            />
                            <label className="form-check-label fw-semibold" htmlFor="upi">
                                UPI
                            </label>
                        </div>

                        <button 
                            className="btn btn-dark w-100 mt-3" 
                            style={{ backgroundColor: '#4a1c03' }}
                            onClick={()=>setPay(true)}
                            disabled={!paymethod}
                        >
                            Pay Now
                        </button>
                    </div>
                </div>
            </div>
        </div>}
    </div>
    {pay&&<Paymnetportal close={()=>setPay(false)}/>}
    </div>
)
}

export default Orderpage