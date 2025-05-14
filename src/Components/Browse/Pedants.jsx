import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';

function Pedants() {
    const [ie,setIE] = useState();
    const navitoorder = useNavigate();
    useEffect(()=>{
        fetch('/design.json').then(res=>res.json()).then(data=>setIE(data.pedants))
    },[])
   

      const updateQuantity = (id, newQuantity) => {
    setIE(ie.map(product => 
      product.id === id ? { ...product, quantity: newQuantity } : product
    ));
  };

  const [sizes,setSize] = useState();
  console.log(ie);
  
  const handle = (e) =>{
    e.preventDefault();
    setSize(e.target.value)
    setIE(ie.map(product => 
      product.size!==sizes?{...product,size:e.target.value}:product 
    ));
  }
  const [colors,setColors] = useState()
   const handleclr = (e) =>{
    e.preventDefault();
    setColors(e.target.value)
    setIE(ie.map(product => 
      product.color!==colors?{...product,color:e.target.value}:product 
    ));
  }

  const [ordervalue,setOrdervalue] = useState()
  const orderbtn = (product) =>{
    setOrdervalue(product)
  }
  console.log(ordervalue);
  useEffect(()=>{
    localStorage.setItem("orderpage",JSON.stringify(ordervalue))
  },[ordervalue])

  return (
    <div className="jewelry-section" style={{ backgroundColor: "#F3F3B7" }}>
      <div className="container-fluid">
        <div className="row pb-5">
          {/* Filter Sidebar */}
          <div
            className="col-12 col-md-2 pt-5"
            style={{ backgroundColor: "white" }}
          >
            <div className="filter-section p-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="mb-0 fs-4">Tags</h6>
                <button className="btn btn-link text-dark p-0 text-decoration-none">
                  Clear All
                </button>
              </div>

              {/* Designer Filter */}
              <div className="mb-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="designer"
                  />
                  <label className="form-check-label" htmlFor="designer">
                    Designer
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="fullStone"
                  />
                  <label className="form-check-label" htmlFor="fullStone">
                    Full Stone
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="northStyle"
                  />
                  <label className="form-check-label" htmlFor="northStyle">
                    North Style
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="southStyle"
                  />
                  <label className="form-check-label" htmlFor="southStyle">
                    South Style
                  </label>
                </div>
              </div>

              {/* Color Filter */}
              <h6 className="mb-2 fs-4">Colour</h6>
              <div className="mb-3">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="green"
                    name="color"
                    value={"Green"}
                    onChange={(e)=>handleclr(e)}
                  />
                  <label className="form-check-label" htmlFor="green">
                    Green
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="gold"
                    name="color"
                    value={"Gold"}
                    onChange={(e)=>handleclr(e)}
                  />
                  <label className="form-check-label" htmlFor="gold">
                    Gold
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="red"
                    name="color"
                    onChange={(e)=>handleclr(e)}
                    value={"Red"}
                  />
                  <label className="form-check-label" htmlFor="red">
                    Red
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="blue"
                    name="color"
                    onChange={(e)=>handleclr(e)}
                    value={"Blue"}
                  />
                  <label className="form-check-label" htmlFor="blue">
                    Blue
                  </label>
                </div>
              </div>

              {/* Size Filter */}
              <h6 className="mb-2 fs-4">Size</h6>
              <div className="mb-3">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="2x2"
                    value={"2x2"}
                    onChange={(e)=>handle(e)}
                    name="size"
                  />
                  <label className="form-check-label" htmlFor="2x2">
                    2 x 2
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="2x4"
                    value={"2x4"}
                   onChange={(e)=>handle(e)}
                    name="size"
                  />
                  <label className="form-check-label" htmlFor="2x4">
                    2 x 4
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="2x6"
                    value={"2x6"}
                    onChange={(e)=>handle(e)}
                    name="size"
                  />
                  <label className="form-check-label" htmlFor="2x6">
                    2 x 6
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="2x8"
                    value={"2x8"}
                    onChange={(e)=>handle(e)}
                    name="size"
                  />
                  <label className="form-check-label" htmlFor="2x8">
                    2 x 8
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Product Display */}
          <div className="col-12 col-md-9 mx-auto">
            {/* Stone Jhumkas Section */}
            <h3 className="fw-bold fs-3 pt-5">Pedants</h3>
            <div className="d-flex justify-content-between mt-5">
              <h3 className="fw-bold fs-3">Stone Pedants</h3>
             <Link to={'/pedantmore'}><button className="expbtn">Explore More</button></Link>
            </div>
            <div className="container mt-4 pb-5">
              <div className="container">
                <div className="scroll-container overflow-scroll bg-light p-3">
                  <div
                    className="d-flex gap-5 setwid"
                    style={{ minWidth: "min-content" }}
                  >
                    <div
                      className="card border-0 mx-2 setwid"
                      style={{ width: "380px" }}
                    >
                      <img
                        src="images/116.webp"
                        alt="Green & Red Kemp chain"
                        className="card-img-top"
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                      <div
                        className="card-body text-center"
                        style={{ backgroundColor: "#4a1c03", color: "white" }}
                      >
                        <h6 className="mb-0 py-3">Flower Pendant</h6>
                      </div>
                    </div>

                    <div
                      className="card border-0 mx-2 setwid"
                      style={{ width: "380px" }}
                    >
                      <img
                        src="/images/118.webp"
                        alt="Green & Red Kemp chain"
                        className="card-img-top"
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                      <div
                        className="card-body text-center"
                        style={{ backgroundColor: "#4a1c03", color: "white" }}
                      >
                        <h6 className="mb-0 py-3">Ohm Pendant</h6>
                      </div>
                    </div>

                    <div
                      className="card border-0 mx-2 setwid"
                      style={{ width: "380px" }}
                    >
                      <img
                        src="/images/104.jpg"
                        alt="Green & Red Kemp chain"
                        className="card-img-top"
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                      <div
                        className="card-body text-center"
                        style={{ backgroundColor: "#4a1c03", color: "white" }}
                      >
                        <h6 className="mb-0 py-3">Flower Pendant</h6>
                      </div>
                    </div>

                    <div
                      className="card border-0 mx-2 setwid"
                      style={{ width: "380px" }}
                    >
                      <img
                        src="/images/108.jpg"
                        alt="Kemp Chain"
                        className="card-img-top"
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                      <div
                        className="card-body text-center"
                        style={{ backgroundColor: "#4a1c03", color: "white" }}
                      >
                        <h6 className="mb-0 py-3">Triangle Pendant</h6>
                      </div>
                    </div>
                </div>  
                </div>
              </div>
            </div>
            
              <div className="d-flex justify-content-between">
              <h3 className="fw-bold fs-3">Devotional Pendant</h3>
              <Link to={'/pedantmore'}><button className="expbtn">Explore More</button></Link>
            </div>
            <div className="container mt-4 pb-5">
              <div className="container">
                <div className="scroll-container overflow-scroll bg-light p-3">
                  <div
                    className="d-flex gap-5 setwid"
                    style={{ minWidth: "min-content" }}
                  >
                    <div
                      className="card border-0 mx-2 setwid"
                      style={{ width: "380px" }}
                    >
                      <img
                        src="images/110.webp"
                        alt="Green & Red Kemp chain"
                        className="card-img-top"
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                      <div
                        className="card-body text-center"
                        style={{ backgroundColor: "#4a1c03", color: "white" }}
                      >
                        <h6 className="mb-0 py-3">Pink with Pearl</h6>
                      </div>
                    </div>

                    <div
                      className="card border-0 mx-2 setwid"
                      style={{ width: "380px" }}
                    >
                      <img
                        src="/images/111.webp"
                        alt="Green & Red Kemp chain"
                        className="card-img-top"
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                      <div
                        className="card-body text-center"
                        style={{ backgroundColor: "#4a1c03", color: "white" }}
                      >
                        <h6 className="mb-0 py-3">Green Stone Earring</h6>
                      </div>
                    </div>

                    <div
                      className="card border-0 mx-2 setwid"
                      style={{ width: "380px" }}
                    >
                      <img
                        src="/images/114.jpg"
                        alt="Green & Red Kemp chain"
                        className="card-img-top"
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                      <div
                        className="card-body text-center"
                        style={{ backgroundColor: "#4a1c03", color: "white" }}
                      >
                        <h6 className="mb-0 py-3">Hanging Earring</h6>
                      </div>
                    </div>

                    <div
                      className="card border-0 mx-2 setwid"
                      style={{ width: "380px" }}
                    >
                      <img
                        src="/images/118.webp"
                        alt="Kemp Chain"
                        className="card-img-top"
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                      <div
                        className="card-body text-center"
                        style={{ backgroundColor: "#4a1c03", color: "white" }}
                      >
                        <h6 className="mb-0 py-3">White Stone Earring</h6>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="row gap-3 mx-auto">
            {ie&&ie.map((val,index)=>(
                <div className="col-md-3 mx-auto" key={index}>
                      <div className="card border-0 shadow-sm p-2" style={{backgroundColor:"#DAC6A5"}}>
        <img 
            src={val.designsrc}
            alt="Oxidized Plated Earring" 
            className="card-img-top"
            style={{ height: '300px', objectFit: 'cover' }}
        />
        <div className="card-body">
            <h5 className="card-title mb-3 mt-2">{val.title}</h5>
            
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="price">
                    <span className="fw-bold ps-2">Rs.{val.amount} </span>
                </div>
                
                <div className="quantity-control d-flex align-items-center">
                    <button 
                        className="btn btn-outline-dark btn-sm"
                        style={{ width: '30px', height: '30px', padding: '0' }}
                         onClick={()=>updateQuantity(val.id,val.quantity===1?val.quantity=1:val.quantity-1)}
                    >
                        -
                    </button>
                    
                    <h1 className="fs-6 px-3">{val.quantity}</h1>
                    
                    <button 
                        className="btn btn-outline-dark btn-sm"
                        style={{ width: '30px', height: '30px', padding: '0' }}
                        onClick={()=>updateQuantity(val.id,val.quantity+=1)}
                    >
                        +
                    </button>
                </div>
            </div>

            <button 
                className="btn btn-dark w-100" 
                style={{ backgroundColor: '#4a1c03' }}
                onClick={()=>{orderbtn(val),navitoorder('/order')}}
            >
                Bulk Order
            </button>
        </div>
    </div>
                </div>
            ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Pedants