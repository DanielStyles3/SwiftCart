import React from 'react'
import icon from "../../assets/images/icons/icon1.png"
import icon1 from '../../assets/images/icons/icon4.png'
import icon2 from '../../assets/images/icons/icon2.png'
import icon3 from '../../assets/images/icons/icon5.png'
import icon4 from '../../assets/images/icons/icon3.png'


const Hero = () => {
  return (
    <>
    <section className='hero p-2'>
      <div className="container-xxl ">
        <div className="row">
            <div className="hero-details d-flex justify-content-around  text-center mx-5">
            <div className="card-details p-3">
                <div className='card p-2'>

                    <img className='hero-details img' src={icon} alt="" />
                    <p>Quick Ordering</p>
                    </div>

                </div>
                    <div className="card-details p-3">
                    <div className='card p-2'>
                    <img className='hero-details img' src={icon1} alt="" />
                    <p>High Ordering</p>
                </div>
                    </div>
                    <div className="card-details p-3">
                    <div className='card p-2'>
                    <img className='hero-details img' src={icon2} alt="" />
                    <p>Fast Delivery</p>
                </div>
                    </div>
                        <div className="card-details p-3">
                        <div className='card p-2'>
                    <img className='hero-details img' src={icon3} alt="" />
                    <p>Payment Method</p>
                </div>
                        </div>
                        <div className="card-details p-3">
                        <div className='card p-2'>
                    <img className='hero-details img' src={icon4} alt="" />
                    <p>High Sales</p>
                </div>
                
                        </div>

            </div>

        </div>

      </div>
    </section>
    
    </>
  )
}

export default Hero
