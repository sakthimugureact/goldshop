import React from "react";
import Footer from "../Footer/Footer";

function Contactportal() {
  return (
    <div className="contactportal">
      <div className="container-fluid">
        <img src="/images/contact.png" className="img-fluid" alt="" />
      </div>
      <div className="container mx-auto">
        <div className="appointment-section py-5">
          <div className="container">
            <div className="row g-4">
              {/* FAQs Card */}
              <div className="col-12 col-md-4 p-5">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <h4 className="card-title mb-3">FAQs</h4>
                    <p className="card-text mb-4">
                      Frequently Asked Questions regarding Order, Delivery,
                      Shipping, etc.
                    </p>
                    <button
                      className="btn btn-dark px-4 py-2"
                      style={{ backgroundColor: "#4a1c03" }}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>

              {/* Store Appointment Card */}
              <div className="col-12 col-md-4 p-5">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <h4 className="card-title mb-3">Store Appointment</h4>
                    <p className="card-text mb-4">
                      Visit store and checkout our latest collection Minimum
                      order amount will be Rs.15,000 INR
                    </p>
                    <button
                      className="btn btn-dark px-4 py-2"
                      style={{ backgroundColor: "#4a1c03" }}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>

              {/* Video Purchase Appointment Card */}
              <div className="col-12 col-md-4 p-5">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <h4 className="card-title mb-3">Video Purchase</h4>
                    <p className="card-text mb-4">
                      Schedule video call to check samples and build trust with
                      us so you can place order online
                    </p>
                    <button
                      className="btn btn-dark px-4 py-2"
                      style={{ backgroundColor: "#4a1c03" }}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="text-center fs-3">Connect US</h4>
      <div className="contact-section py-5">
        <div className="container mx-auto">
          <div className="row gap-4 ">
            {/* Contact Information */}
            <div className="col-12 mx-auto col-md-5">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h4 className="mb-4">Head Office</h4>

                  <div className="mb-3">
                    <strong>Address :</strong>
                    <p className="mb-0">Acharya Abc Street,</p>
                    <p>Mumbai, India</p>
                  </div>

                  <div className="mb-3">
                    <strong>Phone :</strong>
                    <p className="mb-0">
                      <a
                        href="tel:+919876543210"
                        className="text-dark text-decoration-none"
                      >
                        +91 9876543210
                      </a>
                    </p>
                  </div>

                  <div className="mb-3">
                    <strong>Email :</strong>
                    <p className="mb-0">
                      <a
                        href="mailto:acharya@gmail.com"
                        className="text-dark text-decoration-none"
                      >
                        acharya@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="col-12 col-md-5 mx-auto">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.9367557147754!2d72.8776!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNCJF!5e0!3m2!1sen!2sin!4v1639137674955!5m2!1sen!2sin"
                    style={{
                      border: 0,
                      width: "100%",
                      height: "100%",
                      minHeight: "300px",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="text-center fs-3">FAQ's</h4>
 <div className="container mx-auto my-5">
        <div className="row">
            <div className="col-12">
                <nav className="nav nav-pills nav-fill">
                    <a className="nav-link text-dark fs-4" href="#order-faqs" 
                        style={{ backgroundColor: 'transparent', fontWeight: '500' }}>
                        Order FAQs
                    </a>
                    <a className="nav-link text-dark fs-4" href="#shipping-faqs"
                        style={{ backgroundColor: 'transparent', fontWeight: '500' }}>
                        Shipping FAQs
                    </a>
                    <a className="nav-link text-dark fs-4" href="#payment-faqs"
                        style={{ backgroundColor: 'transparent', fontWeight: '500' }}>
                        Payment FAQs
                    </a>
                    <a className="nav-link text-dark fs-4" href="#return-faqs"
                        style={{ backgroundColor: 'transparent', fontWeight: '500' }}>
                        Return FAQs
                    </a>
                </nav>
            </div>
        </div>
    </div>
      <Footer />
    </div>
  );
}

export default Contactportal;
