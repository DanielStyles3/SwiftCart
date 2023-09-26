import React from 'react'
import {AiFillInstagram,AiFillFacebook} from "react-icons/ai"
import {FaXTwitter} from "react-icons/fa6"
import { Link } from 'react-router-dom'
import pay from '../../assets/images/pay/pay.png'
const Footer = () => {
  return (
    <>
    <footer className='footer p-5'>
      <div className="containerxxl">
        <div className="row">
          <div className="col-4 d-flex-column">
            <h2 className='mb-5 '>Contact us</h2>
            <div className="footer-datails">
              <p className='mb-3'><b>Address:</b>Styles floor,maryland.</p>
              <p className='mb-3'><b>Phonecall:</b><a href='tel:+234 807 064 2295'>Call Us @ +234 807 064 2295 </a></p>
              <p className='mb-5'><b>Hours Open:</b>From 8 A.m to 5 P.m</p>

                <p className="mb-3"><b>Follow Us</b></p>
                <div className="social-icons col-4 justify-content-around d-flex">
                  <Link><AiFillFacebook /></Link>
                  <Link><AiFillInstagram /></Link>
                  <Link><FaXTwitter /></Link>

              </div>

            </div>

          </div>
          <div className="col-2">
            <h3 className="mb-4">About Us</h3>
            <div className="footer-details d-flex flex-column">
              <Link className='mb-3 '>
                About Us
              </Link>
              <Link className='mb-3'>
                Delivery
              </Link>
              <Link className='mb-3'>
                Privacy Policy
              </Link>
              <Link className='mb-3'>
                Terms & Condition
              </Link>
            </div>
          </div>
          <div className="col-2">
            <h3 className="mb-4">Account</h3>
            <div className="footer-details d-flex flex-column">
              <Link className='mb-3'>
                Cart
              </Link>
              <Link className='mb-3'>
                Help
              </Link>
              <Link className='mb-3'>
                Payment
              </Link>
              <Link className='mb-3'>
                My wishlist
              </Link>
            </div>
          </div>
          <div className="col-4">
            <h3 className="mb-3">Payment Method</h3>
            <Link className='pay'>
            <img src={pay} alt='' />
            
            </Link>
          </div>
        </div>
        <hr/>

        <div className="row d-flex justify-content-between">
          <div className="col-9">
            <p><b> Developed By Daniel Styles</b></p>
          </div>
          <div className="col-3 d-flex justify-content-around">
            <Link>Privacy Policy</Link>
            <Link>Terms & Condition</Link>
            <Link>Contact Us</Link>
          </div>
         

        </div>
      </div>

    </footer>
    </>
  )
}

export default Footer
