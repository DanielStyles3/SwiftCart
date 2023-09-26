import React, { useContext, useState } from 'react';
import { ShopContext } from '../shopContext';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { stepButtonClasses } from '@mui/material';

const Prod = (props) => {
  const { id, name, image, price, brand } = props.data;

  // State for managing the rating value (you can set this value from your data)
  const [ratingValue, setRatingValue] = useState(3.5); // Set an initial rating value here

  // Function to handle rating change
  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
  };
  
  const { viewProductDetails, addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  const handleAddToCart = () => {
    addToCart(id);
    // Add a class to the button when clicked
    const addToCartButton = document.getElementById(`add-to-cart-${id}`);
    if (addToCartButton) {
      addToCartButton.classList.toggle('sucess');
    }
  };

  return (
    <>
      <div key={id} className='col-3 p-2 mb-3 '>
        <div className='card'>
          <img src={image} alt="" className='card-img-top img-fluid m-auto p-2' />
          <div className='card-details p-3'>
            <span>{brand}</span>
            <h5 className='my-2 '>{name}</h5>

            {/* Render the Rating component with interactive onChange */}
            <Rating
              name={`rating-${id}`} // Use a unique name for each product
              value={ratingValue} // Set the rating value here
              precision={1} // Set precision (e.g., half stars)
              onChange={handleRatingChange} // Handle rating change
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            <h5 className='price mb-2'>${price}  <span className='text-danger'>&nbsp;<strike>{price * 2}</strike></span></h5>
            <div className="d-flex align-items-center justify-content-around mb-2">
              <button onClick={() => viewProductDetails(id)}>View Details</button>
              <button
                id={`add-to-cart-${id}`} // Add a unique id to the button
                onClick={handleAddToCart} // Use the modified click handler
              >
                Add To Cart
                {cartItemCount > 0 && `(${cartItemCount})`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prod;
