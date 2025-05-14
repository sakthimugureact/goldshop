import React, { useEffect, useState } from 'react'
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

function EaringMore() {
    const navitoorder = useNavigate();
    const [more,setMore] = useState();
    useEffect(()=>{
        fetch('/design.json').then(res=>res.json()).then(data=>setMore(data.innerearrings))
    },[])

      const updateQuantity = (id, newQuantity) => {
    setMore(more.map(product => 
      product.id === id ? { ...product, quantity: newQuantity } : product
    ));
  };

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
    <div className="row gap-3 mx-auto mb-5">
        <Link to="/earring" className='ps-5 py-3 fs-2 fw-bold text-dark'><ArrowLeft/></Link>
            {more&&more.map((val,index)=>(
                <div className="col-md-3 mx-auto" key={index}>
                      <div className="card border-0 shadow-sm p-2" style={{backgroundColor:"#DAC6A5"}}>
       <Link to={`/productdetails/${val.id}`}>
        <img 
            src={val.designsrc}
            alt="Oxidized Plated Earring" 
            className="card-img-top"
            style={{ height: '300px', objectFit: 'cover' }}
        />
       </Link>
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

export default EaringMore