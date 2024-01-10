
import Link from 'next/link'
import React from 'react'

const SubNav = ({ds}) => {



 
 
  return (
    <>
    <div className="flex lg:w-1/2 md:w-[70%] w-[90%] h-[150px] justify-center items-center text-white">
    <Link href={"/"}><span className={`w-[90px] h-[90px] rounded-l-2xl bg-[#6228d7] flex justify-center items-center hover:scale-125 hover:bg-pink-500 hover:shadow-2xl hover:shadow-gray-700 ${ds === "all" ? "shadow-gray-700 shadow-2xl scale-125 bg-pink-500":""} `} >ALL</span></Link>
            <Link href={"/reel"}><span className={`w-[90px] h-[90px]  bg-[#6228d7] flex justify-center items-center hover:scale-125 hover:bg-pink-500 hover:shadow-2xl hover:shadow-gray-700 ${ds === "reels" ? "shadow-gray-700 shadow-2xl scale-125 bg-pink-500":""} `}>Reels</span></Link>
            <Link href={"/video"}><span className={`w-[90px] h-[90px]  bg-[#6228d7] flex justify-center items-center hover:scale-125 hover:bg-pink-500 hover:shadow-2xl hover:shadow-gray-700 ${ds === "video" ? "shadow-gray-700 shadow-2xl scale-125 bg-pink-500":""} `}>Video</span></Link>
            <Link href={"/photo"}><span className={`w-[90px] h-[90px]  bg-[#6228d7] flex justify-center items-center hover:scale-125 hover:bg-pink-500 hover:shadow-2xl hover:shadow-gray-700 ${ds === "photo" ? "shadow-gray-700 shadow-2xl scale-125 bg-pink-500":""} `}>Photo</span></Link>
            <Link href={"/story"}><span className={`w-[90px] h-[90px] rounded-r-2xl bg-[#6228d7] flex justify-center items-center hover:scale-125 hover:bg-pink-500 hover:shadow-2xl hover:shadow-gray-700 ${ds === "story" ? "shadow-gray-700 shadow-2xl scale-125 bg-pink-500":""} `}>Story</span></Link>
    </div>
    </>
  )
}

export default SubNav