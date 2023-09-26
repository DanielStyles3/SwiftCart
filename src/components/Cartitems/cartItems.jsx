import React, { useContext } from 'react';
import { ShopContext } from '../shopContext';

const CartItems = (props) => {
  const { id, name, image, price, brand } = props.data;
  const { addToCart, cartItems,removeToCart,updateToCart} = useContext(ShopContext);

  return (
    <>
      <section className="cart-items p-5">
        <div className="container-xxl">
          <div className="row">
            <table className='mb-3'>
              <thead>
                <tr>
                  <th className="col-3">Product Image</th>
                  <th className="col-3">Product Details</th>
                  <th className="col-3">Edit</th>
                  <th className="col-2">Product Price</th>
                </tr>
              </thead>
              <tbody className='p-4' >
                <tr>
                  <td className='col-3'>
                  <img src={image} alt="" className=" cart-img img-fluid" />

                  </td>
                  <td className="col-3">
                    <p>{brand}</p>
                    <p>{name}</p>
                    {/* <p>{price}</p> */}
                  </td>
                  <td>
                    <button
                      className="add-btn"
                      onClick={() => {
                        addToCart(id);
                      }}
                    >
                      +
                    </button>
                    <input type="text"  value={cartItems[id]} onChange={(e)=>
                    updateCartItemCount(Number(e.target.value),id)}/>

                    <button
                      className="add-btn"
                      onClick={() => {
                        removeToCart(id);
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>
                  <div className="input-group mb-3">
                {/* <input type="text" className="form-control" placeholder="Enter your coupon code" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <span className="input-group-text" id="basic-addon2">Enter</span> */}
              <p className='col-3'>{price}</p>
              </div>

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartItems;
