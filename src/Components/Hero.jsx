import React from 'react'
import Downlo from './Downlo'

const Hero = () => { 
  return ( 
    <div className='flex w-full min-h-screen max-h-auto flex-col items-center  bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]'>
        <div className="flex lg:w-1/2 md:w-[70%] w-[90%] h-[150px] justify-center items-center text-white">
            <span className='w-[90px] h-[90px] rounded-l-2xl bg-[#6228d7] flex justify-center items-center hover:scale-125 hover:bg-pink-500 hover:shadow-2xl hover:shadow-gray-700 '>ALL</span>
            <span className='w-[90px] h-[90px]  bg-[#6228d7] flex justify-center items-center hover:scale-125  hover:bg-pink-500 hover:shadow-2xl hover:shadow-gray-700'>Reels</span>
            <span className='w-[90px] h-[90px]  bg-[#6228d7] flex justify-center items-center hover:scale-125  hover:bg-pink-500 hover:shadow-2xl hover:shadow-gray-700'>Video</span>
            <span className='w-[90px] h-[90px]  bg-[#6228d7] flex justify-center items-center hover:scale-125  hover:bg-pink-500  hover:shadow-2xl hover:shadow-gray-700'>Photo</span>
            <span className='w-[90px] h-[90px] rounded-r-2xl bg-[#6228d7] flex justify-center  items-center hover:scale-125  hover:bg-pink-500 hover:shadow-2xl hover:shadow-gray-700'>Story</span>
        </div>
        <div className="lg:w-1/2 md:w-[70%] w-[90%] h-[190px] flex flex-col justify-center items-center backdrop-blur-md bg-white/20 rounded-2xl text-black p-4 gap-4 items-center">
            <h1 className='text-xl font-extrabold md:text-4xl text-center '>Instagram Downloader</h1>
            <h3 className='font-bold text-center  md:text-lg text-sm'>Instagram Downloader for Video & Reels, Story, Photos</h3>
            <p className='font-light md:text-lg text-sm text-center'>PAST LINK AND CLICK DOWNLOAD BUTTON</p>    
        </div>  
        <Downlo />
    </div>
  )
} 
  
export default Hero 