import React from 'react'
import { PRODUCTS1 } from '../Product/Product'

const newArrival = () => {
  return (
    <>
        <div className='row mt-4'>
        {PRODUCTS1.slice(2,6).map(product =>(
            // <img src={product.image} alt='' />
            <div className="col-3 p-2">
                            <div key={product.id}>
            <div className="card text-center ">
                    <img src={product.image} alt='' className='card-img-top img-fluid  m-auto p-3'/>
                    <div className="card-details">
                        <div className="title m-2">
                        <span>{product.brand}</span>
                        <h3>{product.name}</h3>
                        <div className="card-footer text-center">
                            <p>50% off</p>

                        </div>
                        </div>
                       
                    </div>
                
                </div>
               
            </div>

            </div>
        ))}
      
    </div>
    
    </>
    )
}

export default newArrival
