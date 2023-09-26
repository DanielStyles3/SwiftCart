import React from 'react'
import ShopItems from '../components/ShopItems/shopItems'

const shop = () => {
  return (
      <>
  <section className="repair">
    <div className="container-xxl">
      <div className="row">
        <div className=" styles repair-details text-center d-flex flex-column align-items-center p-3">
          <span className="text-white mt-2">Repair Service</span>
          <h2 className='styles'>on 50% discount on any products</h2>
          <p className='text-white'>Make Your Orders We Deliver</p>
        </div>

      </div>
    </div>
  </section>

  <section className="shop-products p-5">
    <div className='container-xxl'>
      <div className="row">
        <ShopItems />

      </div>
    </div>
  </section>


      <section className="pagination">
        <div className="container-xxl">
          <div className="row d-flex align-items-center">
            <div className="col-6">
            <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>

            </div>
          </div>
        </div>






      </section>

      
      
      
      
      </>
  )
}

export default shop
