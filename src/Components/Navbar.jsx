"use client"
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { signIn, signOut, useSession } from "next-auth/react";
import Link from 'next/link';
const Navbar = () => {     
  const [open, setOpen] = useState(false)
  const [animationParent] = useAutoAnimate() 
  const {status} = useSession();
  console.log(status);
  return (
    <div className='flex justify-center w-full h-auto transition-all 'ref={animationParent}>
      {
        open &&  
      <MobNavbar setOpen={setOpen}/>
      }
        <div className="flex lg:w-[90%] w-full md:w-[90%]  h-auto p-4 justify-between items-center shadow-lg shadow-gray-700 ">

        <h1 className='font-extrabold text-orange-400 transition-all md:text-2xl hover:scale-110'>SAVEINSTA</h1>
        <ul className='md:flex  lg:w-[40%] md:w-[50%] hidden h-auto justify-center items-center gap-7 text-black'>
          <div className="relative px-2 py-1 transition-all group ">
            
            <li className='flex items-center transition-all cursor-pointer text-neutral-400 group-hover:text-black'>
            <span>Instagram Downloader</span>
            <IoIosArrowDown className='transition-all rotate-180 group-hover:rotate-0'/>  
            </li>
            {/* dropdown */}
            <div className="absolute right-0 z-10 flex-col hidden w-auto gap-1 px-2 py-3 bg-white rounded-lg shadow-md top-8 group-hover:flex">

              <span className='px-2 py-2 transition-all cursor-pointer text-neutral-400 hover:text-black'>Instagram Reels Downloader</span> 
              <span className='px-2 py-2 transition-all cursor-pointer text-neutral-400 hover:text-black'>Download Instagram Photo</span>
              <span className='px-2 py-2 transition-all cursor-pointer text-neutral-400 hover:text-black'>Instagram Story Download</span>
              <span className='px-2 py-2 transition-all cursor-pointer text-neutral-400 hover:text-black'>Instagram Video Download</span>
            </div>
          </div>
            <li className='transition-all text-neutral-400 hover:text-black'>contact</li> 
            <Link href={"/blog"} className='transition-all text-neutral-400 hover:text-black'>Blog</Link>
            {
              status ==="authenticated" ?

              <div className={"py-1 px-3 bg-blue-500 text-white"} onClick={()=>signOut()}>
    SignOut 
  </div>:
         
            <div className={"py-1 px-3 bg-blue-500 text-white"} onClick={() => signIn("google")}>
    SignIn 
  </div>
     }
        </ul>  
        <div className="flex md:hidden">
          <FiMenu className='text-4xl' onClick={()=> setOpen(true)} />
          </div>    
        </div>  
    </div>
  )
}

export default Navbar



 
const MobNavbar = ({setOpen}) => {
  
  const [show, setShow] = useState(false)
  const [animationParent] = useAutoAnimate()
  return (
    <div className='fixed top-0 left-0 z-10 flex justify-end w-full h-full bg-black/60 md:hidden '>
      <div className="h-full w-[65%] bg-white p-4 ">
        <section className='flex justify-end'>
          <AiOutlineClose className='text-4xl cursor-pointer'  onClick={()=>setOpen(false)}/>
        </section>
        <ul className='flex flex-col items-start justify-center h-auto text-black md:hidden gap-7'>
          <div className="relative px-2 py-1 transition-all group " ref={animationParent} onClick={()=> setShow(!show)}>
            
            <li className='flex items-center w-auto transition-all cursor-pointer text-neutral-400 group-hover:text-black'>
            <span>Instagram Downloader</span>
            <IoIosArrowDown className={`transition-all ${show ? "rotate-180" :"rotate-0"} `}/>  
            </li>
            {/* dropdown */}  
            {  
              show &&  
      
            <div className="flex flex-col w-full gap-1 px-2 py-3 bg-white rounded-lg">

              <span className='px-2 py-2 transition-all cursor-pointer text-neutral-400 hover:text-black'>Instagram Reels Downloader</span> 
              <span className='px-2 py-2 transition-all cursor-pointer text-neutral-400 hover:text-black'>Download Instagram Photo</span>
              <span className='px-2 py-2 transition-all cursor-pointer text-neutral-400 hover:text-black'>Instagram Story Download</span>
              <span className='px-2 py-2 transition-all cursor-pointer text-neutral-400 hover:text-black'>Instagram Video Download</span>
            </div>
                  }
          </div>
            <li className='transition-all text-neutral-400 hover:text-black'>contact</li> 
            <li className='transition-all text-neutral-400 hover:text-black'>Blog</li>
        </ul> 
      </div>
    </div>
  )
}

