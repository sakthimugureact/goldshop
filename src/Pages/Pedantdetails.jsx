import React, { useEffect, useState } from 'react'
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

function Pedantdetails() {
     let {id} = useParams();
    const navitoorder = useNavigate()
        const[show,setShow] = useState()
        const [recom,setRecom] = useState()
    console.log(recom);
    
        const updateQuantity = (newQuantity) => {
      setShow(show.quantity==show.quantity?{...show,quantity:newQuantity}:"show") 

      };
      useEffect(() => {
        fetch('/design.json').then((res) => res.json()).then((data) => {
            const pr = data.pedants
            const showProduct = pr.find((p) => p.id === parseInt(id));
            setShow(showProduct)
            setRecom(data.pedants.slice(0,3))
        })
    },[])
      
      
    
        const [ordervalue,setOrdervalue] = useState()
        const orderbtn = (product) =>{
          setOrdervalue(product)
        }
        console.log(ordervalue);
        useEffect(()=>{
          localStorage.setItem("orderpage",JSON.stringify(ordervalue))
        },[ordervalue])
    
  return (
    <>
    <Link to={'/pedantmore'} className='fw-bold fs-2 text-dark ps-2'><ArrowLeft/></Link>
    {show&&<div className="product-detail py-4">
    <div className="container mx-auto">
        <div className="row">
            {/* Main Product Image */}
            <div className="col-md-6 mb-4">
                <img 
                    src={show.designsrc} 
                    alt="Green Kundan Earring" 
                    className="img-fluid rounded"
                    style={{ width: '90%', objectFit: 'cover' }}
                />
            </div>

            {/* Product Details */}
            <div className="col-md-6 d-flex flex-column justify-content-evenly">
                <h2 className="mb-3">{show.title}</h2>
                <div className="price-tag mb-2">
                    <h4>Rs. {show.amount}</h4>
                    <small className="text-muted">Taxes and shipping calculated at checkout</small>
                </div>

                <div className="about-product mb-4">
                    <h5 className="mb-2">About product</h5>
                    <p>Add a graceful touch to your traditional attire with the earring Delicate Green kundan Earring Set.</p>
                    <p>Designed to capture the essence of classic Indian jewelry, thisearring set features a stunning combination of intricate pearl detailing and premium gold plating. The delicate design reflects fine craftsmanship and timeless style, making it the perfect accessory</p>
                    <p className="text-muted">Note: Image may be vary slightly from the actual product.</p>
                </div>


                <div className="quantity-selector d-flex align-items-center mb-4">
                    <span className="me-3">Select Quantity:</span>
                    <div className="input-group d-flex align-items-center" style={{ width: '200px' }}>
                        <button className="btn btn-dark fs-4 p-1"  onClick={()=>updateQuantity(show.quantity===1?show.quantity=1:show.quantity-1)}>-</button>
                        <h4 className='px-3'>{show.quantity}</h4>
                        <button className="btn btn-dark fs-4 p-1"   onClick={()=>updateQuantity(show.quantity+1)}>+</button>
                    </div>
                </div>

                <button 
                    className="btn btn-dark w-50 p-2" 
                    style={{ backgroundColor: '#4a1c03' }}
                    onClick={()=>{orderbtn(show),navitoorder('/order')}}
                >
                    Buy It
                </button>
            </div>
        </div>
    </div>
</div>}
<h1 className='fs-3 text-center py-5'>Recommended Products</h1>
 <div className="row gap-3 mx-auto mb-5">
            {recom&&recom.map((val,index)=>(
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
<Footer/>
    </>
  )
}

export default Pedantdetails