import React from 'react'
import { BiSolidPhoneCall, BiMessageRoundedDots } from "react-icons/bi"
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineInboxIn } from "react-icons/hi"
import { VscAccount } from "react-icons/vsc"
import { TiShoppingCart } from "react-icons/ti"

const Header = () => {
  const location = useLocation(); // Note the corrected useLocation invocation
  return (
    <>
      <header className='header-top-strip p-1 px-4 shadow-sm'>
        <div className='container-xxl'>
          <div className="row align-items-center">
            <div className="col-6">
              <p style={{ color: "white" }}>The trending outfits at 50% off</p>
            </div>
            <div className="col-6 d-flex justify-content-between">
              <div>
                <a href="+2348070642956">Contact Us +2348070642956 </a>
              </div>
              <div>
                <Link><BiSolidPhoneCall className='fs-3 mx-4' /> </Link>
                <Link><BiMessageRoundedDots className='fs-3 mx-4' /></Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2 text-center">
              <Link to="/"><span className='img-fluid logo'>SwiftCart</span></Link>
            </div>
            <div className="col-3 align-items-center d-flex mt-3 ">
              <div className="input-group mb-3 m-auto">
                <span className="input-group-text" id="basic-addon1">All</span>
                <input type="text" className="form-control p-2  " placeholder="Search Product Here" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <button className="input-group-text" id="basic-addon2">Search</button>
              </div>
            </div>
            <div className="nav-links col-4 d-flex align-items-center justify-content-between text-center  m-auto">
              <Link to={`/`} className={location.pathname === "/" ? "active" : "inactive"}>Home </Link>
              <Link to={`/shop`} className={location.pathname === "/shop" ? "active" : "inactive"}>Shop</Link>
              <Link to={`/blog`} className={location.pathname === "/blog" ? "active" : "inactive"}>Blog</Link>
              <Link to={`/about`}  className={location.pathname === "/about" ? "active" : "inactive"}>About</Link>
              <Link to={`/contact`}  className={location.pathname === "/contact" ? "active" : "inactive"}>Contact</Link>
            </div>
            <div className="nav-link-Nav col-3 d-flex align-items-center justify-content-around m-auto">
              <Link to={`/wishlist`} className="d-flex"><HiOutlineInboxIn className='fs-3 mx-2' />
                <span className="">Wishlist</span>
              </Link>
              <Link to={`/account`} className="d-flex"><VscAccount className='fs-3 mx-2' />
                <span>Account</span>
              </Link>
              <Link to={`/cart`} className="d-flex"><TiShoppingCart className='fs-3 mx-2' />
                <span>Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
