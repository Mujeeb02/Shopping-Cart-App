import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from "../components/CartItem";
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
const Cart = () => {

  const cart = useSelector((state) => state.cart.items);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));   // this "useEffecct" use for total amount of cart price. and default valu is the 0.
  }, [cart])                                                              // reduce is a function for calculate the total amount.    


  return (
    <div>
      <div className='flex flex-col md:flex-row justify-center items center mb-2'>
        {
          cart.length > 0 ?
            (<div className='flex flex-col sm:flex-row max-w-6xl '>
              <div className='w-[100%] sm:w-[60vw] lg:w-[60%] flex flex-col p-2'>
                {
                  cart.map((item, index) => {
                    return <CartItem key={item.id} item={item} itemIndex={index} />
                  })
                }
              </div>
              {/* Second div in CartItem*/}
              <div>
                <div className='flex flex-col h-[400px] w-[40%] justify-between mt-20 ml-8 p-3'>
                  <div className='sm:w-[20vw] md:w-[15vw] xl:w-[10vw] font-semibold text-xl text-green-800 uppercase'>Your Cart</div>
                  <div className='sm:w-[20vw] md:w-[15vw] xl:w-[10vw] font-semibold text-5xl text-green-700  uppercase mb-4'>Summary</div>
                  <p className='text-xl w-[40vw] sm:w-[20vw] md:w-[25vw] xl:w-[10vw]'>
                    <span className='text-gray-700 font-semibold text-xl'>Total Items: {cart.length}</span>
                  </p>
                  <span className='w-[70vw] sm:w-[30vw] md:w-[25vw] xl:w-[10vw] text-gray-700 font-semibold'>Total Amount: <span className='font-bold text-xl'>${totalAmount}</span> </span>

                  <button className='w-[70vw] sm:w-[40vw] md:w-[32vw] xl:w-[20vw] bg-green-700 hover:bg-slate-50 rounded-lg text-white 
                      transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 px-12 text-xl'>
                    CheckOut Now
                  </button>
                </div>
              </div>
            </div>
            ) :
            (<div className='flex  flex-col justify-center items-center min-h-[80vh]'>
              <h2 className='text-gray-700 font-semibold text-xl mb-2'>Your Cart Empty!</h2>
              <Link to={"/"}>
                <button className='bg-green-600 hover:bg-slate-50 rounded-lg text-white 
                transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 
                p-3 px-10 tracking-wider'>
                  Shop Now
                </button>
              </Link>

            </div>)
        }
      </div>
    </div>
  )
}

export default Cart