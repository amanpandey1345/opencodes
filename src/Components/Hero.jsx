import React from 'react'

const Hero = () => { 
  return ( 
    <div className='flex w-full h-screen flex-col items-center  bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]'>
        <div className="flex lg:w-1/2 md:w-[70%] w-[90%] h-[150px] justify-center items-center text-white">
            <span className='w-[90px] h-[90px] rounded-l-2xl bg-[#6228d7] flex justify-center items-center hover:scale-125 hover:bg-pink-500 hover:shadow-2xl hover:shadow-gray-700 '>ALL</span>
            <span className='w-[90px] h-[90px]  bg-[#6228d7] flex justify-center items-center hover:scale-125  hover:bg-pink-500 hover:shadow-2xl hover:shadow-gray-700'>Reels</span>
            <span className='w-[90px] h-[90px]  bg-[#6228d7] flex justify-center items-center hover:scale-125  hover:bg-pink-500 hover:shadow-2xl hover:shadow-gray-700'>Video</span>
            <span className='w-[90px] h-[90px]  bg-[#6228d7] flex justify-center items-center hover:scale-125  hover:bg-pink-500  hover:shadow-2xl hover:shadow-gray-700'>Photo</span>
            <span className='w-[90px] h-[90px] rounded-r-2xl bg-[#6228d7] flex justify-center  items-center hover:scale-125  hover:bg-pink-500 hover:shadow-2xl hover:shadow-gray-700'>Story</span>
        </div>
        <div className="lg:w-1/2 md:w-[70%] w-[90%] h-[190px] flex flex-col justify-center items-center backdrop-blur-md bg-white/20 rounded-2xl text-black p-4 gap-4">
            <h1 className='font-extrabold md:text-4xl text-2xl '>Instagram Downloader</h1>
            <h3 className='font-bold md:text-lg  text-center'>Instagram Downloader for Video & Reels, Story, Photos</h3>
            <p className='md:text-lg font-light'>PAST LINK AND CLICK DOWNLOAD BUTTON</p>    
        </div> 
    
       <div className="max-w-auto  lg:min-w-[60%] md:min-w-[70%] min-w-[85%] h-auto relative  justify-center items-center flex mt-7">
            <input type="text" placeholder='PASTE URL' className='w-[100%] py-4 px-6 focus:scale-110  border-gray-400 border-[2px] rounded-lg backdrop-blur-lg bg-white/50'/>
            <div className="absolute top-auto right-2 flex gap-2">

            <button className=' py-2 px-4 border-black border-[1px] rounded-xl'>Paste</button>   
            <button className=' py-2 px-4 border-black border-[1px] rounded-xl '>Clear</button> 
            </div>
            </div> 

   
        <div className=" px-7 py-3 bg-blue-700 text-xl mt-7 rounded-lg text-white font-semibold"> 
             Download 
        </div>
    </div>
  )
} 
  
export default Hero 