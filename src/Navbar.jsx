import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
        <div className='col-md-12'>
            <p style={{backgroundColor:'#38CB89'}} className=' text-dark fw-bold py-2 text-center color'>30% off storewide -- Limited Time!  Shop Now</p>
        <nav className="navbar navbar-expand-lg bg-light">
           <div className="container-fluid">
              <NavLink to="/" className="navbar-brand text-dark fw-bold ms-4"><h3>3legant</h3></NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item px-3"><NavLink to="/" className="nav-link text-dark">Home</NavLink></li>
                <li className="nav-item px-3"><NavLink to="/shop" className="nav-link text-dark">Shop</NavLink></li>
                <li className="nav-item px-3"><NavLink to="/product" className="nav-link text-dark">Product</NavLink></li>
                <li className="nav-item px-3"><NavLink to="/contact" className="nav-link text-dark">Contact Us</NavLink></li>
                <li className="nav-item px-3"><NavLink to="/contact" className="nav-link text-dark"><i class="bi bi-search px-2"></i><i class="bi bi-person-circle px-2"></i><i class="bi bi-basket3-fill px-2"></i><i class="bi bi-2-circle-fill px-2"></i></NavLink></li>
                
            </ul>
        </div>
      </div>
    </nav> 

        </div>
        </div>
       
    </div>
  
    </>
  )
}

export default Navbar
