import React from 'react'
import './Footer.css'
import { Envelope, Facebook, GeoAlt, Instagram, Telephone, Youtube } from 'react-bootstrap-icons'
function Footer() {
  return (
    <>
     <footer className="footer-dark">
        <div className="container mx-auto">
            <div className="row">
                <div className="col-6 col-md-3 mb-4">
                    <h5 className="footer-heading">Online Shopping</h5>
                    <a href="#" className="footer-link">About Us</a>
                    <a href="#" className="footer-link">Ordering Process</a>
                    <a href="#" className="footer-link">Membership</a>
                    <a href="#" className="footer-link">FAQs</a>
                </div>

                <div className="col-6 col-md-3 mb-4">
                    <h5 className="footer-heading">Useful Links</h5>
                    <a href="#" className="footer-link">T&C</a>
                    <a href="#" className="footer-link">Shipping</a>
                    <a href="#" className="footer-link">Cancellation</a>
                    <a href="#" className="footer-link">Privacy Policy</a>
                    <a href="#" className="footer-link">Return / Refund</a>
                    <a href="#" className="footer-link">Payments</a>
                </div>

                <div className="col-6 col-md-3 mb-4">
                    <h5 className="footer-heading">My Accounts</h5>
                    <a href="#" className="footer-link">Log in / Signup</a>
                    <a href="#" className="footer-link">My Wishlist</a>
                    <a href="#" className="footer-link">My Cart</a>
                    <a href="#" className="footer-link">Others</a>
                </div>

                <div className="col-6 col-md-3 mb-4">
                    <h5 className="footer-heading">Contact Us</h5>
                    <p><GeoAlt/>Acharya Abc Complex, Mumbai, India</p>
                    <p><Envelope/>aara@gmail.com</p>
                    <p><Telephone/> +91 9876543210</p>
                </div>
            </div>

            <hr className="border-light" />

            <div className="row align-items-center d-none d-md-flex">
                <div className="col-md-4 mb-3 mb-md-0">
                    <div className="d-flex align-items-center">
                        <i className="bi bi-shield-lock me-2"></i>
                        <div>
                            <strong><svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.5 56.772C27.058 55.1561 22.5378 51.86 18.9393 46.8839C15.3409 41.9078 13.5416 36.3006 13.5416 30.0625V15.4158L32.5 8.3335L51.4583 15.4158V30.0625C51.4583 36.2988 49.6591 41.9051 46.0606 46.8812C42.4621 51.8573 37.9419 55.1525 32.5 56.772ZM32.5 53.8985C37.1944 52.4089 41.0763 49.4297 44.1458 44.961C47.2152 40.4922 48.75 35.527 48.75 30.0652V17.2656L32.5 11.226L16.25 17.2656V30.0625C16.25 35.5243 17.7847 40.4895 20.8541 44.9583C23.9236 49.427 27.8055 52.4089 32.5 53.8985ZM27.1889 42.3962H37.811C38.4321 42.3962 38.9521 42.1868 39.371 41.7679C39.7899 41.349 39.9993 40.829 39.9993 40.2079V32.2914C39.9993 31.6721 39.7899 31.153 39.371 30.7341C38.9521 30.3152 38.4321 30.1058 37.811 30.1058H37.3425V27.3975C37.3425 26.0451 36.882 24.9076 35.9612 23.985C35.0404 23.0641 33.9038 22.6037 32.5514 22.6037C31.1991 22.6037 30.0625 23.0641 29.1416 23.985C28.2208 24.9058 27.7604 26.0433 27.7604 27.3975V30.1058H27.1862C26.5669 30.1058 26.0478 30.3152 25.6289 30.7341C25.21 31.153 25.0006 31.6721 25.0006 32.2914V40.2079C25.0006 40.829 25.21 41.349 25.6289 41.7679C26.0478 42.1868 26.5678 42.3962 27.1889 42.3962ZM29.8431 30.1058V27.3975C29.8431 26.6301 30.1031 25.9864 30.6231 25.4664C31.1431 24.9464 31.7859 24.6864 32.5514 24.6864C33.317 24.6864 33.9607 24.9464 34.4825 25.4664C35.0043 25.9864 35.2634 26.6301 35.2598 27.3975V30.1058H29.8431Z" fill="#E6E6E6"/>
</svg>
100% Secured</strong><br />
                            Payment Gateway
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3 mb-md-0 text-center d-flex align-items-center">
                    <div>Secure Payment Option</div>
                    <img src="/images/visa.png" alt="Visa" className="payment-icons img-fluid" />
                    <img src="/images/mastercard.png" alt="Mastercard" className="payment-icons" />
                </div>

                <div className="col-md-4 mb-3 mb-md-0 text-md-end">
                    <div className="d-flex align-items-center justify-content-md-end">
                        <i className="bi bi-globe me-2"></i>
                        <div>
                            <strong>International</strong><br />
                            Delivery
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center social-icons">
                <h6>Keep in Touch</h6>
                <a href="#"><Facebook/></a>
                <a href="#"><Instagram/></a>
                <a href="#"><Youtube/></a>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer