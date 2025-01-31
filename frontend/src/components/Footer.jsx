import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 my-10 text-sm'>
        <div>
          <img src={assets.logo} alt='' className='w-32 mb-5' />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      {/* Move this outside the grid */}
      <div className="border-t border-gray-300 mt-5">
        <p className="py-5 text-sm text-center text-gray-600">
          Copyright 2024@ forever.com - All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
