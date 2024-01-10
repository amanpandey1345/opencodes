
import React from 'react'



const Navbar = () => {




  return (
    <div className='flex w-full h-auto  justify-center'>
        <div className="flex lg:w-[80%] w-full md:w-[90%]  h-auto p-4 justify-between items-center shadow-lg shadow-gray-700 ">

        <h1 className='font-extrabold md:text-2xl text-orange-400'>SAVEINSTA</h1>
        <ul className='md:flex  lg:w-[40%] md:w-[50%] hidden h-auto justify-center items-center gap-7 text-black'>
            <li>Instagram Downloader</li>
            <li>contact</li> 
            <li>Blog</li>
        </ul>     
        </div> 
    </div>
  )
}

export default Navbar