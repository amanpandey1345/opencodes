
import Link from 'next/link'
import React from 'react'
import { TfiVideoClapper } from "react-icons/tfi";
import { RiVideoLine } from "react-icons/ri";
import { HiOutlinePhotograph } from "react-icons/hi";
import { HiMiniVideoCamera } from "react-icons/hi2";
import { useAutoAnimate } from '@formkit/auto-animate/react'
const SubNav = ({ds}) => {



  
    
  return (
    <>
    <div className="flex lg:w-1/2 md:w-[70%] w-[90%] h-[150px] justify-center items-center text-white md:text-base text-sm transition-all">
    <Link  href={"/"} className={`w-[90px] h-[90px] rounded-l-2xl bg-[#6228d7] flex justify-center items-center hover:scale-125 hover:bg-pink-500 hover:shadow-2xl hover:shadow-gray-700 transition-all ${ds === "all" ? "shadow-gray-700 shadow-2xl scale-125 bg-pink-500":""} `}><span  >ALL</span></Link>
            <Link href={"/reel"} className={` group w-[90px] h-[90px]  bg-[#6228d7] flex justify-center items-center hover:scale-125 hover:bg-pink-500 hover:shadow-2xl hover:shadow-gray-700 transition-all flex-col gap-1 ${ds === "reels" ? "shadow-gray-700 shadow-2xl scale-125 bg-pink-500 flex-col gap-1":""} `}>
            <TfiVideoClapper className='text-2xl font-extrabold transition-all group-hover:scale-125' />
              <span className='' >Reels</span>
              
              
            </Link>
            <Link href={"/video"} className={` group w-[90px] h-[90px]  bg-[#6228d7] flex justify-center items-center hover:scale-125 hover:bg-pink-500 hover:shadow-2xl hover:shadow-gray-700 transition-all flex-col gap-1 ${ds === "video" ? "shadow-gray-700 shadow-2xl scale-125 bg-pink-500 flex-col gap-1":""} `}>
            <RiVideoLine className='text-3xl transition-all group-hover:scale-125' />
              <span >Video</span>
              </Link>
            <Link href={"/photo"} className={`group w-[90px] h-[90px]  bg-[#6228d7] flex justify-center items-center hover:scale-125 hover:bg-pink-500 hover:shadow-2xl hover:shadow-gray-700 transition-all flex-col gap-1 ${ds === "photo" ? "shadow-gray-700 shadow-2xl scale-125 bg-pink-500 flex-col gap-1":""} `}>
            <HiOutlinePhotograph className='text-3xl transition-all group-hover:scale-125' />
              <span >Photo</span></Link>
            <Link href={"/story"} className={`group w-[90px] h-[90px] rounded-r-2xl bg-[#6228d7] flex justify-center items-center hover:scale-125 hover:bg-pink-500 hover:shadow-2xl hover:shadow-gray-700 transition-all flex-col gap-1 ${ds === "story" ? "shadow-gray-700 shadow-2xl scale-125 bg-pink-500 flex-col gap-1":""} `}>
            <HiMiniVideoCamera className='text-3xl transition-all group-hover:scale-125' />
              <span >Story</span></Link>
    </div>
    </>  
  )
}

export default SubNav