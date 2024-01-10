import Downlo from '@/Components/Downlo'
import SubNav from '@/Components/SubNav'
import React from 'react'

const page = () => {


  return (
    <>

     <div className='flex w-full min-h-screen max-h-auto flex-col items-center  bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]'>
        <SubNav ds={"story"}/>
        <div className="lg:w-1/2 md:w-[70%] w-[90%] h-[190px] flex flex-col justify-center items-center backdrop-blur-md bg-white/20 rounded-2xl text-black p-4 gap-4 items-center">
            <h1 className='text-xl font-extrabold md:text-4xl text-center '>Download Instagram Story</h1>
            {/* <h3 className='font-bold text-center  md:text-lg text-sm'>Instagram Downloader for Video & Reels, Story, Photos</h3> */}
            <p className='font-light md:text-lg text-sm text-center'>PAST LINK AND CLICK DOWNLOAD BUTTON</p>    
        </div>  
        <Downlo />
    </div>
    </>
  )
}

export default page