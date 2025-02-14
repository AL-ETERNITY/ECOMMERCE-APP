import React, { useState, useContext } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems, adminUrl} = useContext(ShopContext);

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
    }

    return (
    <div className='flex justify-between items-center py-5 font-medium'>
      <Link to='/'><img src={assets.logo} alt='' className='w-36' /></Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <button
              onClick={() => {
                window.location.href = adminUrl;
              }}
              className=" border-1 border-gray-400 px-4 py-1.5 ml-6 text-sm hidden sm:block rounded-4xl cursor-pointer"
            >
              Admin Panel
            </button>
        </ul>
        <div className='flex items-centre gap-6'>
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} alt='' className='w-5 cursor-pointer' />

            <div className='group relative'>
                <img onClick={()=>token ? null : navigate('/login')} src={assets.profile_icon} alt='' className='w-5 cursor-pointer' />
                {/* Dropdown menu */}
                {token && 
                <div className='group-hover:block hidden absolute right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                        <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>}
            </div>
            <Link to='/cart' className='relative'> 
                <img src={assets.cart_icon} alt='' className='w-5 min-w-5' />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt='' className='w-5 cursor-pointer sm:hidden'/>
        </div>
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white trabsition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)} className='flex items-centre gap-4 p-3 cursor-pointer'>
                    <img src={assets.dropdown_icon} alt='' className='h-4 rotate-180' onClick={()=>setVisible(false)}/>
                    <p>Back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                <button onClick={() => {setVisible(false); window.location.href = adminUrl; }} className='py-2 pl-6 border'>Admin Panel</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
