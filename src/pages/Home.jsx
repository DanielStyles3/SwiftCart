import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero/Hero'
import FeaturedProduct from '../components/Feature/featuredProduct'
import NewArrival from '../components/Newarrival/newArrival'
import banner from '../assets/images/banner/b17.jpg'
import banner1 from '../assets/images/banner/b10.jpg'
import blog1 from '../assets/images/blog/blog-1.jpg'
import blog2 from '../assets/images/blog/blog-2.jpg'
import blog3 from '../assets/images/blog/blog-3.jpg'
import blog4 from '../assets/images/blog/blog-4.jpg'
// import Newsletter from '../components/newsletter';
// import Hero from '../components/Hero/Hero';

const Home = () => {
  return (
  <>
 < section className="banner mb-3 ">
    <div className="container-xxl">
      <div className="row">
        <div className="banner-details p-5 d-flex flex-column align-items-start justify-content-center">
          <span className='shadow-lg mt-3 p-3 text-white '>Trade in Offer</span>
          <h1>Super Value Deals</h1>
          <h2>On All Product</h2>
          <p className='p-2 m-0 text-black'>Save More In SwiftCart</p>
          <Link className='button-link mb-3'>Shop Now</Link>

        </div>
      </div>
    </div>
  </section>
  <Hero />

  <section className="featured-product p-5">
   <div className="container-xxl">
    <div className="row">
      <div className="text-center">
        <h1>Featured Products</h1>
        <p>modern design</p>
        {/* <div className="d-flex justify-content-around"></div> */}
        <FeaturedProduct />
      </div>
    </div>
   </div>
  </section>


  <section className="repair">
    <div className="container-xxl">
      <div className="row">
        <div className=" styles repair-details text-center d-flex flex-column align-items-center p-3">
          <span className="text-white mt-2">Repair Service</span>
          <h2 className='styles'>on 50% discount on any products</h2>
          <div className="mt-2">
            <button className='button-repair'>Explore Now</button>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section className="new-products p-5">
   <div className="container-xxl">
    <div className="row">
      <div className="text-center">
        <h1>new arrival Products</h1>
        <p>Your Best Brand Designer Wears</p>
        {/* <div className="d-flex justify-content-around"></div> */}
        <NewArrival />
      </div>
    </div>
   </div>
  </section>

  <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
    <div className="container-xxl">
      <div className="row">
        <div className="col-md-6 d-flex">
                  <div className="card m-auto mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={banner} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Hot Deals</h5>
                  <h2 className="card-text mb-2">Buy One get One free.</h2>
                  <p className="card-text mb-2"><small className="text-body-secondary">The latest best collection in our closet <br />Feel Cute with our outfits</small></p>
                  <Link to='blog'>
                  <button className='mt-4'>Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="col-md-6 d-flex">
                  <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={banner1} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Season-In</h5>
                  <h2 className="card-text mb-2">All Weather Attire</h2>
                  <p className="card-text mb-2"><small className="text-body-secondary">It never matter which season it is <br />We got you covered</small></p>
                  <Link to='blog'>
                  <button className='mt-4'>Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>

  <section className="blogs p-5">
  <div className="container-xxl">
    <div className="row">
      <div className="col-12 text-center">
        <h1 className="mb-3">What our customers say...</h1>
        <p className="mb-4">Our customers never miss a bit on providing feedback</p>
      </div>
      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src={blog1} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <Link to='about'>
            <button className="mt-4">Learn more</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src={blog2} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <Link to='about'>
            <button className="mt-4">Learn more</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src={blog3} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <Link to='about'>
            <button className="mt-4">Learn more</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-6 mb-4">
        <div className="card">
          <img src={blog4} className="card-img-top img-fluid" alt="..." />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <Link to='about'>
            <button className="mt-4">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


            {/* </div>
        </div>
       </div>
      </div>
    </div>
  </div> */}


  </>
  )
}

export default Home
