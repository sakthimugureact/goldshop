import React from 'react'
import ReactDOM from 'react-dom'
import { CheckCircleFill } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'

function Paymnetportal({close}) {
    const backhome = useNavigate();
    setTimeout(()=>{
        backhome("/")
        close
    },3000)
    const paymentDiv = document.getElementById('payment')
  return ReactDOM.createPortal(
    <>
    <div className="success-page d-flex align-items-center justify-content-center" style={{ backgroundColor: '#fff5e6' }}>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card border-0 shadow-sm text-center p-4">
                    <div className="success-icon mb-4">
                        <CheckCircleFill style={{ fontSize: '6rem',color:"chartreuse" }}></CheckCircleFill>
                    </div>
                    
                    <h3 className="mb-3">Thank You</h3>
                    <p className="mb-2 fs-6">Your Order has been Successfully Placed</p>
                    <p className="text-muted fs-6">Product will be Shipped in 3 working days</p>
                </div>
            </div>
        </div>
    </div>
</div>
    </>,paymentDiv
  )
}

export default Paymnetportal