import React from 'react';
import Product from '../components/Product';

const ProductList = ({ items }) => {
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto gap-5 min-h-[80vh] mb-10">
      {items.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
