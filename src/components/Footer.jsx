import React from 'react'
import { assets } from '../assets/assets'
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <>
    <div className=' pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='container  mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="" />
                <p className=' text-gray-400 mt-4'>Trusted by international clients to identify and navigate promising Dubai real estate opportunities.</p>
              <div className='flex gap-1 items-center pt-2 '><IoLogoInstagram className="text-pink-500 text-4xl "  onClick={() => window.open("https://instagram.com/saqib.realtor.dxb", "_blank")} /> <p className='text-gray-500 text-xl'> Click on logo to connect</p></div>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#Header" className='hover:text-white'>Home</a>
                    <a href="#About" className='hover:text-white'>About Us</a>
                    <a href="#Contact" className='hover:text-white'>Contact-Us</a>
                    <a href="#Header" className='hover:text-white'>Privacy & Policy</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
             <h3 className='text-white text-lg font-bold mb-4'>Subscribe To Our Newsletter</h3>
<p className='text-gray-400 mb-4 max-w-80'>The Latest News, Articles, and  Resources, Sent To Your Inbox Weekly</p>
            
            <div className='flex gap-2'>
                <input type="email" placeholder='Enter Your Email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
            <button className=' py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
            
            
            </div>
            </div>

            
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
            Copyright 2025 © Syed Usman Hamdani. All Right Reserved


        </div>
    </div>





    </>
  )
}

export default Footer