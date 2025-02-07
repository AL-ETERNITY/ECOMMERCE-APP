import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';


const cart = () => {
  
  const {products, currency, cartItems, updateQuantity, navigate} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(()=>{
    
    if (products.length>0){
      const tempData = [];
      for (const item in cartItems) {
        for (const size in cartItems[item]) {
          if(cartItems[item][size]>0){
            tempData.push({
                _id:item,
                size:size,
                quantity:cartItems[item][size],
              })
          }
        }
      }
      setCartData(tempData);
    }
  },[cartItems,products])

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>
      <div>
        {
          cartData.map((item,index)=>{
            const productData = products.find((product)=>product._id === item._id);
            return (
              <div key={index} className='border-t text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 border-b py-4'>
                <div className='flex items-start gap-6'>
                  <img src={productData.image[0]} alt="" className='w-16 sm:w-20' />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e)=>e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,item.size,Number(e.target.value)) } className={'border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'} type='number' min={1} value={item.quantity}></input>
                <img onClick={()=>updateQuantity(item._id,item.size,0)} src={assets.bin_icon} alt='' className='w-4 mr-4 sm:w-5 cursor-pointer'/>
              </div>
            )
          })
        }
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/placeorder')} className='bg-black text-white text-sm my-8 px-8 py-3 cursor-pointer'>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default cart
