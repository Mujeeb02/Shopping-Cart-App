import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/CartSlice';
import { FaStar } from "react-icons/fa";

const Product = ({ item }) => {

  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item Added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed from Cart");
  }

  return (
    <div className="relative flex flex-col items-center justify-between p-4 mt-10 ml-5 rounded-xl bg-white
      border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1.5">
      
      {/* Rating Badge */}
      <div className="absolute top-2 right-2 flex items-center bg-yellow-400 text-gray-800 text-xs font-bold py-1 px-2 rounded-full shadow-sm">
        {item.rating.rate} <FaStar className="ml-1" />
      </div>

      {/* Product Image */}
      <div className="w-full h-36 flex items-center justify-center">
        <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain rounded-md" />
      </div>

      {/* Product Title */}
      <h3 className="text-gray-900 font-semibold text-md mt-3 mb-2 text-center">{item.title}</h3>

      {/* Product Description */}
      <p className="text-gray-600 text-sm text-center px-3">
        {item.description.split(" ").slice(0, 10).join(" ") + "..."}
      </p>

      {/* Price and Cart Actions */}
      <div className="flex justify-between items-center w-full mt-3">
        <p className="text-green-700 font-bold text-lg">${item.price}</p>

        {cart.some((p) => p.id === item.id) ? (
          <button
            className="text-white bg-red-500 hover:bg-red-600 rounded-full font-semibold text-sm py-2 px-4 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            onClick={removeFromCart}>
            Remove
          </button>
        ) : (
          <button
            className="text-white bg-gray-500 hover:bg-gray-600 rounded-full font-semibold text-sm py-2 px-4 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
