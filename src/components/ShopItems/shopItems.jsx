import React from 'react';
import Prod from '../Prod/Prod';
import { PRODUCTS, PRODUCTS1 } from '../Product/Product';

const shopItems = () => {
  return (
    <div className='row'>
      {[...PRODUCTS, ...PRODUCTS1].map((product) => (
        <Prod key={product.id} data={product} />
      ))}
    </div>
  );
};

export default shopItems;
