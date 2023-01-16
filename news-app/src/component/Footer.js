import React from 'react';
import {SiGmail } from 'react-icons/si'
import {FaTwitterSquare,FaInstagram,FaFacebookSquare } from 'react-icons/fa'
const Footer = () => {
  return (
   
    <footer className='flex flex-col space-y-2 pb-3 mt-2 bg-gray-50 '>
         <hr className='mb-5'></hr>
      <div className='flex flex-row space-x-5  justify-center pb-4'>
      <FaFacebookSquare className='scale-150 hover:scale-125 cursor-pointer'/>
      <FaTwitterSquare  className='scale-150 hover:scale-125 cursor-pointer'/>
      <FaInstagram  className='scale-150 hover:scale-125 cursor-pointer'/>
     < SiGmail  className='scale-150  hover:scale-125 cursor-pointer'/>
      </div>
      <span className='mx-auto text-lg font-medium'>© Copyright the khabri</span>
      <span className='mx-auto text-lg font-medium hover:scale-105 cursor-pointer active:font-bold'><a href='#top'>Back-To-Top</a></span>
    </footer>
  )
}

export default Footer