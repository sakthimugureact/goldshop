import React, { useState } from 'react'
import { Navbar,Container } from 'react-bootstrap'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
    <Navbar>
        <Container fluid className='p-2'>
          <Navbar.Brand href="#home"><img src="/images/logo.png" alt="" width="200" className='ps-3'/></Navbar.Brand>
        </Container>
      </Navbar>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid navcon">
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-light"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 p-3 d-flex gap-5">


        <li className="nav-item">
          <Link className="nav-link active text-light fs-5 fw-semibold" aria-current="page" to="/">Home</Link>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light fs-5 fw-semibold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Designer Jewellery
          </a>
          <Container className="dropdown-menu dropmenu" aria-labelledby="navbarDropdown">
          <div className="row d-flex gp">
            {/*Temple Jewellery*/}
            <div className="col-md-6 col-lg-2 col-xl-3 category-column">
                <h3 className="category-title">Temple Jewellery</h3>
                <ul className="category-list">
                    <li><a href="#">Temple Jewellery Pendant Set</a></li>
                    <li><a href="#">Temple Jewellery Coin Set</a></li>
                    <li><a href="#">Temple Jewellery Necklace Set</a></li>
                    <li><a href="#">Temple Jewellery Items</a></li>
                    <li><a href="#">Temple Bangle Only</a></li>
                    <li><a href="#">Temple Jewellery Finger Ring</a></li>
                    <li><a href="#">Temple Pendant Only</a></li>
                </ul>
            </div>

            {/*Antique Jewellery*/}
            <div className="col-md-6 col-lg-2 me-0 me-xl-4 category-column">
                <h3 className="category-title">Antique Jewellery</h3>
                <ul className="category-list">
                    <li><a href="#">Antique Designer Pendant set</a></li>
                    <li><a href="#">Antique Earrings</a></li>
                    <li><a href="#">Antique Chain</a></li>
                    <li><a href="#">Antique Bangles</a></li>
                    <li><a href="#">Antique Single Ring</a></li>
                </ul>
            </div>

            {/*Kundan Jewellery*/}
            <div className="col-md-4 col-lg-2 me-xl-4 category-column">
                <h3 className="category-title">Kundan Jewellery</h3>
                <ul className="category-list">
                    <li><a href="#">Kundan Necklace set</a></li>
                    <li><a href="#">Kundan Watch</a></li>
                    <li><a href="#">Kundan Bracelets</a></li>
                    <li><a href="#">Kundan Kada</a></li>
                    <li><a href="#">Kundan Ring</a></li>
                    <li><a href="#">Kundan Pendant set</a></li>
                </ul>
            </div>

            {/*Polki Jewellery*/}
            <div className="col-md-4 col-lg-2 category-column">
                <h3 className="category-title">Polki Jewellery</h3>
                <ul className="category-list">
                    <li><a href="#">Polki Chain</a></li>
                    <li><a href="#">Polki Bangles</a></li>
                    <li><a href="#">Polki Finger Ring</a></li>
                    <li><a href="#">Polki Necklace</a></li>
                    <li><a href="#">Polki Earrings</a></li>
                </ul>
            </div>
            {/*Kemp Jewellery*/}
            <div className="col-md-4 col-lg-2 category-column">
                <h3 className="category-title">Kemp Jewellery</h3>
                <ul className="category-list">
                    <li><a href="#">Kemp Necklace</a></li>
                    <li><a href="#">Kemp Bangle set</a></li>
                    <li><a href="#">Kemp Earrings</a></li>
                    <li><a href="#">Kemp Pendant set</a></li>
                </ul>
            </div>
        </div>
          </Container>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light fs-5 fw-semibold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Jewellery Collection
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <div className="row py-3">
         <div className="col-md-4">
        <ul className='stylelist'>
         <li className="nav-item">
          <Link className="nav-link m-2 mx-4 bg-light text-center borrad p-1">Earring</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link m-2 mx-4 bg-light text-center borrad p-1">Chain</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link m-2 mx-4 bg-light text-center borrad p-1">Toe Ring</Link>
        </li>
        </ul>
         </div>
         <div className="col-md-4">
            <ul className='stylelist'>
         <li className="nav-item">
          <Link className="nav-link  m-2 mx-4 bg-light text-center borrad p-1">Necklace</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link  m-2 mx-4 bg-light text-center borrad p-1">Bindi</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link  m-2 mx-4 bg-light text-center borrad p-1">Finger Ring</Link>
        </li>
        </ul >

         </div>
         <div className="col-md-4">
            <ul className='stylelist'>
         <li className="nav-item">
          <Link className="nav-link  m-2 mx-4 bg-light text-center borrad p-1">Pendant</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link  m-2 mx-4 bg-light text-center borrad p-1">Bangels</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link  m-2 mx-4 bg-light text-center borrad p-1">Payal</Link>
        </li>
        </ul>

         </div>
          </div>
          </div>
        </li>


        <li className="nav-item">
          <Link className="nav-link text-light fs-5 fw-semibold " to="/trending">Whats Trending</Link>
        </li>
        

        <li className="nav-item">
        <Link className="nav-link text-light fs-5 fw-semibold" to="/contact">Contact Us</Link>
        </li>
      </ul>
        <Link className="nav-link text-light text-center fs-5 fw-semibold me-lg-3 me-xl-4" to='/login'>Login</Link>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header