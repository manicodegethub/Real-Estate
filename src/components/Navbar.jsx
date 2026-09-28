import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [showMobMenu ,setShowMobMenu] =useState(false)
  useEffect(()=>{
    if(showMobMenu){
      document.body.style.overflow ='hidden'
    }else{
      document.body.style.overflow ='auto'
      return ()=>{
         document.body.style.overflow ='auto'
      }

    }

  },[showMobMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
       <div className=''> <h2 className='text-4xl text-white font-bold'>Saqib Awan</h2>
       </div>
        <ul className='hidden  md:flex gap-7 text-white'>
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
          <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Project</a>
          <a href="#Testimonial" className='cursor-pointer hover:text-gray-400'>Testimonial</a>
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign-Up</button>
        <img onClick={()=>{
          setShowMobMenu(true)
        }} src={assets.menu_icon} alt="" className='md:hidden w-7 cursor-pointer' />
      </div>

    {/* --------------mobile menu------------ */}
    <div className={`md:hidden ${showMobMenu?"fixed w-full":"h-0 w-0"}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
      <div className='flex justify-end p-6 cursor-pointer'>
        <img  onClick={()=>{
          setShowMobMenu(false)
        }}  src={assets.cross_icon} className='w-6'  alt="" />
      </div>
      <ul className=' flex flex-col items-center gap-2 mmt-5 px--5 text-lg font-medium'>
        <a  onClick={()=>{
          setShowMobMenu(false)
        }} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
        <a onClick={()=>{
          setShowMobMenu(false)
        }}  href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
        <a onClick={()=>{
          setShowMobMenu(false)
        }}  href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
        <a onClick={()=>{
          setShowMobMenu(false)
        }}  href="#Testimonial" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
       
      </ul>
    </div>






    </div>
  )
}

export default Navbar